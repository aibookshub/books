import React from 'react';
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { Image, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import styles from "@/src/styles/bookstyles";

type RootStackParamList = {
    Category: { categoryId: string; categoryName: string };
    Books: { subcategoryId: string };
};

type SubcategoryScreenNavigationProp = StackNavigationProp<RootStackParamList, "Category">;
type SubcategoryScreenRouteProp = RouteProp<RootStackParamList, "Category">;

interface Props {
    navigation: SubcategoryScreenNavigationProp;
    route: SubcategoryScreenRouteProp;
}

// Define Subcategory Type
interface SubcategoryItem {
    id: string;
    categoryId: string;
    name: string;
    cover: string;
}

// Mock data for subcategories
const subcategories = [
    { id: "1", categoryId: "1", name: "Science Fiction", cover: "https://aidres.com/gallery/yangchenchen1/IMG_0527.JPG" },
    { id: "2", categoryId: "1", name: "Fantasy", cover: "https://aidres.com/gallery/yangchenchen1/IMG_0527.JPG" },
    { id: "3", categoryId: "1", name: "Mystery", cover: "https://aidres.com/gallery/yangchenchen1/IMG_0527.JPG" },
    { id: "4", categoryId: "1", name: "Biography", cover: "https://aidres.com/gallery/yangchenchen1/IMG_0527.JPG" },
    { id: "5", categoryId: "1", name: "History", cover: "https://aidres.com/gallery/yangchenchen1/IMG_0527.JPG" },
    { id: "6", categoryId: "1", name: "Self-Help", cover: "https://aidres.com/gallery/yangchenchen1/IMG_0527.JPG" },
];

const CategoryScreen: React.FC<Props> = ({ route, navigation }) => {
    const { categoryId, categoryName } = route.params;

    // Filter subcategories based on the selected categoryId
    const filteredSubcategories = subcategories.filter(
        (sub) => sub.categoryId === categoryId
    );

    const renderItem = ({ item }: { item: SubcategoryItem }) => (
        <TouchableOpacity
            style={styles.galleryItemContainer}
            onPress={() => navigation.navigate("Books", { subcategoryId: item.id })}
        >
            <Image source={{ uri: item.cover }} style={styles.galleryItemImage} />
            <Text style={styles.galleryItemTitle}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>Subcategories</Text> */}
            <FlatList
                data={filteredSubcategories}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={2} // 2-column grid layout
                contentContainerStyle={styles.gridContainer}
            />
        </View>
    );
};

export default CategoryScreen;