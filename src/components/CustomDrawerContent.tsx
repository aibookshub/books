import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {cat1} from "@/src/config/catelist"
import styles from "@/src/styles/bookstyles";

const CustomDrawerContent = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categories</Text>
            {cat1.map((category) => (
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

export default CustomDrawerContent;