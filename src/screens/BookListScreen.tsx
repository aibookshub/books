import React from 'react';
import styles from "@/src/styles/bookstyles";
import { Image, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import { booklist } from "@/src/config/booklist"
import { BooklistProps } from "@/src/types";

const BooksScreen: React.FC<BooklistProps> = ({ route, navigation }) => {
    const { subCateId, categoryName } = route.params;  // ✅ Extract params safely
    console.log("Category Name:", categoryName);
    const filteredSubcategories = booklist.filter(
        (booklist) => booklist.cat2Id === subCateId
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={filteredSubcategories}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => navigation.navigate('BookDetail', { book: item })}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                            <Image source={require('@/assets/images/icon.png')} style={styles.bookImage} />
                            <View style={{ marginLeft: 15, alignSelf: 'flex-start' }}>
                                <Text style={styles.book_title}>{item.title}</Text>
                                <Text style={styles.book_author}>{item.author}</Text>
                            </View>
                        </View>


                    </TouchableOpacity>
                )}
            />
        </View>
    );
};


export default BooksScreen;