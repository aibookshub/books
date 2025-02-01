import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

const subcategories = {
  fiction: [{ id: 'fantasy', name: 'Fantasy' }, { id: 'mystery', name: 'Mystery' }],
  science: [{ id: 'physics', name: 'Physics' }, { id: 'biology', name: 'Biology' }],
};

export default function CategoryScreen() {
  const { category } = useLocalSearchParams();
  const router = useRouter();

  console.log("✅ Loaded Category:", category);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Category: {category}</Text>
      <FlatList
        data={subcategories[category] || []}
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
              console.log('Navigating to:', `/${category}/${item.id}`);
              router.push(`/${category}/${item.id}`);
            }}
          >
            <Text style={{ fontSize: 18 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
