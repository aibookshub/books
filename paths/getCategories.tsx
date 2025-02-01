interface Category {
    id: string;
    title: string;
    cover: string;
}

// URL for category data
const DATA_URL = "https://raw.githubusercontent.com/aibookshub/aibooks_data/refs/heads/main/maincategories.json";
const titles = ["Python", "Java", "iOS", "Go", "C++", "Rust", "Kotlin", "Swift"];

// Fallback categories in case of a fetch failure
const FALLBACK_CATEGORIES: Category[] = [
    { id: "1", title: "Chenchen New!", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_1.jpg" },
    { id: "2", title: "pure & provocative", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_10.jpg" },
    { id: "3", title: "electric moment", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_11.jpg" },
    { id: "4", title: "beautiful & sassy", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_12.jpg" },
    { id: "5", title: "graceful elegance", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_13.jpg" },
    { id: "6", title: "alluring", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_14.jpg" },
    { id: "7", title: "full of charm", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_15.jpg" },
    { id: "8", title: "professional Yome", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_16.jpg" }
];

// Function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
    return [...array].sort(() => Math.random() - 0.5);
}

// Fetch categories from the online JSON
async function fetchCategories(): Promise<Category[]> {
    try {
        const response = await fetch(DATA_URL);
        if (!response.ok) throw new Error("Failed to fetch category data");

        const data = await response.json();
        if (!Array.isArray(data)) throw new Error("Invalid JSON format");

        // Convert array format into expected category structure
        const categories: Category[] = data.map((group, index) => ({
            id: (index + 1).toString(),
            title: titles[index] || `Category ${index + 1}`,
            cover: Array.isArray(group) && group.length > 0 ? group[0] : shuffleArray(FALLBACK_CATEGORIES.map(c => c.cover))[0]
        }));

        return categories;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return FALLBACK_CATEGORIES;
    }
}

// Export the promise that resolves to categories
const CategoriesPromise = fetchCategories();

export default CategoriesPromise;
