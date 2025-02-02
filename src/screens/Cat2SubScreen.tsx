import React from 'react';
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { Image, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import styles   from "@/src/styles/bookstyles";
import { cat2 } from "@/src/config/catelist"

type RootStackParamList = {
    Category: { categoryId: string; categoryName: string };
    Books: { subCateId: string };
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
    cat1Id: string;
    name: string;
    cover: string;
}

// Mock data for subcategories

const CategoryScreen = ({ route, navigation }: Props) => {
    const { categoryId, categoryName } = route.params;

    // Filter subcategories based on the selected categoryId
    const filteredSubcategories = cat2.filter(
        (sub) => sub.cat1Id === categoryId
    );

    const renderItem = ({ item }: { item: SubcategoryItem }) => (
        <TouchableOpacity
            style={styles.galleryItemContainer}
            onPress={() => navigation.navigate("Books", { subCateId: item.id })}
        >
            <Image source={{ uri: item.cover }} style={styles.galleryItemImage} />
            <Text style={styles.galleryItemTitle}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
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