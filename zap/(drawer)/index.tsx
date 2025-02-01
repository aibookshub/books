import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';

const categories = [
  { id: 'fiction', name: 'Fiction', icon: 'book' },
  { id: 'non-fiction', name: 'Non-Fiction', icon: 'library' },
  { id: 'science', name: 'Science', icon: 'planet' },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              padding: 15,
              backgroundColor: '#f0f0f0',
              marginVertical: 5,
              borderRadius: 10,
              alignItems: 'center',
            }}
            onPress={() => {
              console.log('Navigating to:', `/${item.id}`);
              router.push(`/category/${item.id}`);
            }}
          >
            <Icon name={item.icon} size={24} style={{ marginRight: 10 }} />
            <Text style={{ fontSize: 18 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
