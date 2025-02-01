import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// Mock data for subcategories
const subcategories = [
  { id: '1', categoryId: '1', name: 'Science Fiction' },
  { id: '2', categoryId: '1', name: 'Fantasy' },
  { id: '3', categoryId: '1', name: 'Mystery' },
  { id: '4', categoryId: '2', name: 'Biography' },
  { id: '5', categoryId: '2', name: 'History' },
  { id: '6', categoryId: '2', name: 'Self-Help' },
];

const CategoryScreen = ({ route, navigation }) => {
  const { categoryId, categoryName } = route.params;

  // Filter subcategories based on the selected categoryId
  const filteredSubcategories = subcategories.filter(
    (sub) => sub.categoryId === categoryId
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryName}</Text>
      <FlatList
        data={filteredSubcategories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate('Books', { subcategoryId: item.id })
            }
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

export default CategoryScreen;