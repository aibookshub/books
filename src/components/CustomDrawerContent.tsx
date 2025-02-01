import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const categories = [
    { id: '1', name: 'Fiction' },
    { id: '2', name: 'Non-Fiction' },
];

const CustomDrawerContent = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categories</Text>
            {categories.map((category) => (
                <TouchableOpacity
                    key={category.id}
                    style={styles.item}
                    onPress={() =>
                        navigation.navigate('Main', {
                            screen: 'Category',
                            params: {
                                categoryId: category.id,
                                categoryName: category.name,
                            },
                        })
                    }
                >
                    <Text style={styles.itemText}>{category.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    item: {
        padding: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    itemText: {
        fontSize: 18,
    },
});

export default CustomDrawerContent;