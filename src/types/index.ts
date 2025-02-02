import { StackNavigationProp } from "@react-navigation/stack";

/**
 * RootStackParamList defines the available navigation routes and their parameters.
 */
export type RootStackParamList = {
    Home: undefined;
    Category: { categoryId: string; categoryName: string };
};

/**
 * Navigation prop type for the HomeScreen.
 */
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

/**
 * Props type for HomeScreen component.
 */
export interface HomeScreenProps {
    navigation: HomeScreenNavigationProp;
}



// import { NavigationProp, RouteProp } from "@react-navigation/native";

// type RootStackParamList = {
//     Home: undefined;
//     Category: { categoryId: string; categoryName: string };
// };

// type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
// type Props = { navigation: HomeScreenNavigationProp };


// export type RootStackParamList = {
//     Category: {
//         subCateId: string; 
//         categoryName: string
//     };
//     Books: { subCateId: string };
// };

// export type SubcategoryScreenRouteProp = RouteProp<RootStackParamList, "Category">;

// export interface SubcategoryScreenProps {
//     navigation: NavigationProp<RootStackParamList, "Category">;
//     route: SubcategoryScreenRouteProp;
// }


// export type Category = {
//     id: string;
//     name: string;
//     subcategories: Subcategory[];
// };

// export type Subcategory = {
//     id: string;
//     name: string;
//     books: Book[];
// };

// export type Book = {
//     id: string;
//     title: string;
//     author: string;
// };

