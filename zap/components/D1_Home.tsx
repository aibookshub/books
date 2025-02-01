import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';

import styles from '@/styles/styles';
import CatPromise from '@/paths/getCategories'; // Import the Promise

interface Category {
    id: string;
    title: string;
    cover: string;
}

const YccGallery = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Fetch the YccCat data when the component mounts
        const fetchData = async () => {
            try {
                const data = await CatPromise; // Wait for the Promise to resolve
                setCategories(data); // Update state with the fetched data
            } catch (err) {
                setError('Failed to load categories.'); // Handle errors
                console.error(err);
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchData();
    }, []);

    const handleItemPress = (item: Category) => {
        router.push({
            pathname: '/indexL2',
            params: { itemid: item.id },
        });
    };

    const renderItem = ({ item }: { item: Category }) => (
        <TouchableOpacity
            style={styles.galleryItemContainer}
            onPress={() => handleItemPress(item)}
        >
            <Image source={{ uri: item.cover }} style={styles.galleryItemImage} />
            <Text style={styles.galleryItemTitle} numberOfLines={1}>
                {item.title}
            </Text>
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.albumContainer}>
            <FlatList
                data={categories}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={styles.galleryGrid}
            />
        </View>
    );
};

export default YccGallery;