import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import styles from "@/src/styles/bookstyles";

type RootStackParamList = {
    Home: undefined;
    Category: { categoryId: string; categoryName: string };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type Props = { navigation: HomeScreenNavigationProp };

const categories = [
    { id: "1", name: "Fiction", cover: "https://aidres.com/gallery/yangchenchen1/IMG_0527.JPG" },
    { id: "2", name: "Non-Fiction", cover: "https://aidres.com/gallery/yangchenchen1/IMG_0527.JPG" },
    { id: "3", name: "Python", cover: "https://aidres.com/gallery/yangchenchen1/IMG_0527.JPG" },
    { id: "4", name: "Java", cover: "https://aidres.com/gallery/yangchenchen1/IMG_0527.JPG" },
    { id: "5", name: "AI", cover: "https://aidres.com/gallery/yangchenchen1/IMG_0527.JPG" },
    { id: "6", name: "Data Science", cover: "https://aidres.com/gallery/yangchenchen1/IMG_0527.JPG" },
    { id: "7", name: "Machine Learning", cover: "https://aidres.com/gallery/yangchenchen1/IMG_0527.JPG" },
    { id: "8", name: "Cybersecurity", cover: "https://aidres.com/gallery/yangchenchen1/IMG_0527.JPG" },
];

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const renderItem = ({ item }: { item: (typeof categories)[0] }) => (
        <TouchableOpacity
            style={styles.galleryItemContainer}
            onPress={() =>
                navigation.navigate("Category", {
                    categoryId: item.id,
                    categoryName: item.name,
                })
            }
        >
            <Image source={{ uri: item.cover }} style={styles.galleryItemImage} />
            <Text style={styles.galleryItemTitle}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>Book Categories</Text> */}
            <FlatList
                data={categories}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={2} // Grid with 2 columns
                contentContainerStyle={styles.gridContainer}
            />
        </View>
    );
};

export default HomeScreen;
