import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function BookScreen() {
  const { category, subcategory, book } = useLocalSearchParams();

  console.log("✅ Loaded Book:", category, subcategory, book);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Book: {book}</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>Category: {category}</Text>
      <Text style={{ fontSize: 18 }}>Subcategory: {subcategory}</Text>
    </View>
  );
}
