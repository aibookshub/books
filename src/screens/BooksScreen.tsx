import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const BooksScreen = ({ route, navigation }) => {
  const { subcategoryId } = route.params;

  // Mock data for books
  const books = [
    { id: '1', title: 'Book 1', author: 'Author 1', introduction: 'This is the introduction for Book 1.' },
    { id: '2', title: 'Book 2', author: 'Author 2', introduction: 'This is the introduction for Book 2.' },
    { id: '3', title: 'Book 3', author: 'Author 3', introduction: 'This is the introduction for Book 3.' },
  ];

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Books in Subcategory {subcategoryId}</Text> */}
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('BookDetail', { book: item })}
          >
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemAuthor}>{item.author}</Text>
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
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemAuthor: {
    fontSize: 16,
    color: '#666',
  },
});

export default BooksScreen;