import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { booklist } from "@/src/config/booklist"
import styles   from "@/src/styles/bookstyles";

import { RootStackParamList } from "@/src/types"; // ✅ Ensure correct import

type BooksScreenRouteProp = RouteProp<RootStackParamList, "Books">;
type BooksScreenNavigationProp = NavigationProp<RootStackParamList, "Books">;

type Props = {
    route: BooksScreenRouteProp;
    navigation: BooksScreenNavigationProp;
};

const BooksScreen: React.FC<Props> = ({ route, navigation }) => {
    const { subCateId, categoryName } = route.params;  // ✅ Extract params safely
    console.log("Category Name:", categoryName);
    const filteredSubcategories = booklist.filter(
        (booklist) => booklist.cat2Id === subCateId
    );


    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>Books in Subcategory {subcategoryId}</Text> */}
            <FlatList
                data={filteredSubcategories}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => navigation.navigate('BookDetail', { book: item })}
                    >
                        <Text style={styles.book_title}>{item.title}</Text>
                        <Text style={styles.book_author}>{item.author}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};


export default BooksScreen;