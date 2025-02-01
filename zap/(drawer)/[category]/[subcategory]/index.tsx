import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

const books = {
  fantasy: [{ id: 'harry-potter', name: 'Harry Potter' }, { id: 'lotr', name: 'Lord of the Rings' }],
  physics: [{ id: 'quantum', name: 'Quantum Mechanics' }, { id: 'relativity', name: 'Relativity' }],
};

export default function SubcategoryScreen() {
  const { category, subcategory } = useLocalSearchParams();
  const router = useRouter();

  console.log("✅ Loaded Subcategory:", category, subcategory);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Subcategory: {subcategory}</Text>
      <FlatList
        data={books[subcategory] || []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: '#ddd',
              marginVertical: 5,
              borderRadius: 10,
            }}
            onPress={() => {
              console.log('Navigating to:', `/${category}/${subcategory}/${item.id}`);
              router.push(`/${category}/${subcategory}/${item.id}`);
            }}
          >
            <Text style={{ fontSize: 18 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
