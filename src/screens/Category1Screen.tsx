import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const Category1Screen = ({ navigation }) => {
  const subcategories = [
    { id: '1', name: 'Science Fiction' },
    { id: '2', name: 'Fantasy' },
    { id: '3', name: 'Mystery' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category 1: Fiction</Text>
      <FlatList
        data={subcategories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Books', { subcategoryId: item.id })}
          >
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
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

export default Category1Screen;