import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import styles from "@/src/styles/bookstyles";

const BookDetailScreen = ({ route }) => {
  const { book } = route.params;

  return (
    <ScrollView style={styles.book_container}>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.book_author}>By {book.author}</Text>
      <Text style={styles.book_summary}>{book.summary}</Text>
    </ScrollView>
  );
};


export default BookDetailScreen;