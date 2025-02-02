import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";

import styles from "@/src/styles/bookstyles";
import {cat1} from "@/src/config/booklist"

type RootStackParamList = {
    Home: undefined;
    Category: { categoryId: string; categoryName: string };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type Props = { navigation: HomeScreenNavigationProp };

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const renderItem = ({ item }: { item: (typeof cat1)[0] }) => (
        <TouchableOpacity
            style={styles.galleryItemContainer}
            onPress={() =>
                navigation.navigate("Category", {
                    categoryId: item.id,
                    categoryName: item.name,
                })
            }
        >
            {/* <Image source={{ uri: item.cover }} style={styles.galleryItemImage} /> */}
            <Image source={require('@/assets/images/icon.png')} style={styles.galleryItemImage} />
            <Text style={styles.galleryItemTitle}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={cat1}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={2} // Grid with 2 columns
                contentContainerStyle={styles.gridContainer}
            />
        </View>
    );
};

export default HomeScreen;
