import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import styles from "@/src/styles/bookstyles";

const subcategories = [
    { id: "1", categoryId: "1", name: "Science Fiction", cover: "https://aidres.com/gallery/yangchenchen1/IMG_0527.JPG" },
    { id: "2", categoryId: "1", name: "Fantasy", cover: "https://aidres.com/gallery/yangchenchen1/IMG_0527.JPG" },
    { id: "3", categoryId: "1", name: "Mystery", cover: "https://aidres.com/gallery/yangchenchen1/IMG_0527.JPG" },
    { id: "4", categoryId: "2", name: "Biography", cover: "https://aidres.com/gallery/yangchenchen1/IMG_0527.JPG" },
    { id: "5", categoryId: "2", name: "History", cover: "https://aidres.com/gallery/yangchenchen1/IMG_0527.JPG" },
    { id: "6", categoryId: "2", name: "Self-Help", cover: "https://aidres.com/gallery/yangchenchen1/IMG_0527.JPG" },
];

const SubcategoryScreen = ({ route, navigation }) => {
    const { categoryId } = route.params;

    const filteredSubcategories = subcategories.filter(
        (sub) => sub.categoryId === categoryId
    );

    const renderItem = ({ item }) => (
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
            <Text style={styles.title}>Subcategories</Text>
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

export default SubcategoryScreen;
