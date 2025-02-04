import os, requests, pymongo
from dotenv import load_dotenv
load_dotenv()

# Read the environment variable, falling back to .env
MONGO_URI = os.getenv("MONGO_BOOKS_URI")
DATABASE_NAME = "aibooks_db"
COLLECTION_NAME = "aibooks_collection"

client = pymongo.MongoClient(MONGO_URI)
db = client[DATABASE_NAME]
collection = db[COLLECTION_NAME]

def fetch_book_metadata(title):
    """Fetch book metadata from Google Books API."""
    api_url = "https://www.googleapis.com/books/v1/volumes"
    params = {"q": title}
    
    response = requests.get(api_url, params=params)
    
    if response.status_code == 200:
        data = response.json()
        if "items" in data:
            return data["items"][0]["volumeInfo"]  # Get the first book's metadata
        else:
            print("No books found for:", title)
            return None
    else:
        print("Error fetching data:", response.status_code)
        return None

def save_to_mongodb(book_data):
    """Save book metadata to MongoDB."""
    if book_data:
        collection.insert_one(book_data)
        print("Book saved to MongoDB:", book_data.get("title"))
    else:
        print("No data to save.")

if __name__ == "__main__":
    book_title = input("Enter book title: ")
    book_metadata = fetch_book_metadata(book_title)
    save_to_mongodb(book_metadata)
