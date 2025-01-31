interface YccCategory {
    id: string;
    title: string;
    cover: string;
}

let YccCat: YccCategory[] = [];

async function fetchYccCategoryCover(): Promise<YccCategory[]> {
    try {
        const response = await fetch('https://raw.githubusercontent.com/AIdrescom/Asian-Beauty-Yang-Chenchen-Data/refs/heads/main/categoryList/ycccat.json');

        if (!response.ok) {
            throw new Error('Failed to fetch category covers');
        }

        const yccCategoryCover: string[] = await response.json();
        const srcArray = yccCategoryCover.sort(() => Math.random() - 0.5);

        YccCat = [
            { id: "1", title: "Chenchen New!", cover: srcArray[0] },
            { id: "2", title: "pure & provocative", cover: srcArray[1] },
            { id: "3", title: "electric moment", cover: srcArray[2] },
            { id: "4", title: "beautiful & sassy", cover: srcArray[3] },
            { id: "5", title: "graceful elegance", cover: srcArray[4] },
            { id: "6", title: "alluring", cover: srcArray[5] },
            { id: "7", title: "full of charm", cover: srcArray[6] },
            { id: "8", title: "professional Yome", cover: srcArray[7] }
        ];

        // console.log('YccCat (from fetch):', YccCat);
        return YccCat; // Return the populated array
    } catch (error) {
        console.error('Error fetching category covers:', error);

        YccCat = [
            { id: "1", title: "Chenchen New!", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_1.jpg" },
            { id: "2", title: "pure & provocative", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_10.jpg" },
            { id: "3", title: "electric moment", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_11.jpg" },
            { id: "4", title: "beautiful & sassy", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_12.jpg" },
            { id: "5", title: "graceful elegance", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_13.jpg" },
            { id: "6", title: "alluring", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_14.jpg" },
            { id: "7", title: "full of charm", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_15.jpg" },
            { id: "8", title: "professional Yome", cover: "https://aidrescom.github.io/Asian-Beauty-Yang-Chenchen-Data/cat/ccat_16.jpg" }
        ];

        console.log('YccCat (fallback):', YccCat);
        return YccCat; // Return the fallback data
    }
}

// Export a Promise that resolves to YccCat
const YccCatPromise = fetchYccCategoryCover();

export default YccCatPromise;
