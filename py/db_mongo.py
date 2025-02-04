import os, requests, pymongo,json, sys
from dotenv import load_dotenv
load_dotenv()

# Read the environment variable, falling back to .env
MONGO_URI = os.getenv("MONGO_BOOKS_URI")
DATABASE_NAME = "aibooks_db"
COLLECTION_NAME = "aibooks_collection"

client = pymongo.MongoClient(MONGO_URI)
db = client[DATABASE_NAME]
collection = db[COLLECTION_NAME]

def generate_bid():
    """Generate a unique bid starting with '11' followed by an incrementing 4-digit number."""
    last_entry = collection.find_one(sort=[("bid", pymongo.DESCENDING)])  # Find the last inserted book
    if last_entry and "bid" in last_entry:
        last_number = int(last_entry["bid"][2:])  # Extract the numeric part
    else:
        last_number = 0  # Start from 0000 if no entry exists
    
    new_number = last_number + 1
    return f"11{new_number:04d}"  # Format as '11XXXX'

def fetch_book_metadata(title):
    """Fetch book metadata from Google Books API."""
    api_url = "https://www.googleapis.com/books/v1/volumes"
    params = {"q": title}
    
    response = requests.get(api_url, params=params)
    

    if response.status_code == 200:
        data = response.json()
        if "items" in data:
                book_data = data["items"][0]["volumeInfo"]
                book_data["bid"] = generate_bid()
                return book_data
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



def save_books_to_txt(file_path="booklist.js"):
    """Retrieve books from MongoDB and save them to a .txt file in the given format."""
    books = collection.find()
    
    booklist = []
    for book in books:
        book_entry = {
            "id": book.get("bid", "Unknown ID"),
            "name": book.get("title", "Unknown Title"),
            "cover": book.get("imageLinks", {}).get("smallThumbnail", "No cover available"),
            "title": book.get("title", "Unknown Title"),
            "author": book.get("authors", ["Unknown Author"])[0],
            "summary": book.get("description", "No summary available"),
            "previewLink": book.get("previewLink", "No preview link"),
        }
        booklist.append(book_entry)

    # Write the list to a .js file in the required format
    with open(file_path, "w", encoding="utf-8") as f:
        f.write("export const booklist = ")
        json.dump(booklist, f, indent=4, ensure_ascii=False)

    print(f"Book list saved to {file_path}")

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1].lower() == "t":
            save_books_to_txt()
    else:
        with open("titles.json", "r", encoding="utf-8") as file:
            book_titles = json.load(file)

        for title in book_titles:
            metadata = fetch_book_metadata(title)
            save_to_mongodb(metadata)

# if __name__ == "__main__":
#     book_title = input("Enter book title: ")
#     book_metadata = fetch_book_metadata(book_title)
#     save_to_mongodb(book_metadata)
