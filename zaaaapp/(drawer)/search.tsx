// search.tsx
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

const booksData = [
    { id: 'lotr', title: 'The Lord of the Rings', category: 'fiction', subcategory: 'fantasy' },
    { id: 'hp', title: 'Harry Potter', category: 'fiction', subcategory: 'fantasy' },
    { id: 'sherlock', title: 'Sherlock Holmes', category: 'fiction', subcategory: 'mystery' },
    { id: 'gone-girl', title: 'Gone Girl', category: 'fiction', subcategory: 'mystery' },
];

export default function SearchScreen() {
    const { query } = useLocalSearchParams();
    const router = useRouter();

    const filteredBooks = booksData.filter((book) =>
        book.title.toLowerCase().includes(query?.toLowerCase() || '')
    );

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
                Search Results for "{query}"
            </Text>
            <FlatList
                data={filteredBooks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => router.push(`/${item.category}/${item.subcategory}/${item.id}`)}>
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
