import { StackNavigationProp } from "@react-navigation/stack";
import { NavigationProp, RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
    Home: undefined;
    Category: { categoryId: string; categoryName: string };
    Books: { subCateId: string; categoryName: string };
    BookDetail: { book: { 
        id: string; 
        cat1Id: string; 
        cat2Id: string; 
        name: string; 
        cover: string; 
        title: string; 
        author: string; 
    }};
};

// Home
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
export interface HomeScreenProps {
    navigation: HomeScreenNavigationProp;
}

// SubCategory
type SubcategoryScreenNavigationProp = StackNavigationProp<RootStackParamList, "Category">;
type SubcategoryScreenRouteProp = RouteProp<RootStackParamList, "Category">;

export interface SubCateProps {
    navigation: SubcategoryScreenNavigationProp;
    route: SubcategoryScreenRouteProp;
}

// Define Subcategory Type
export interface SubCateItem {
    id: string;
    cat1Id: string;
    name: string;
    cover: string;
}


