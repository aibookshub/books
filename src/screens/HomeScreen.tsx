import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import styles from '@/src/styles/bookstyles';

// Define the stack navigation type
type RootStackParamList = {
  Home: undefined;
  Category: { categoryId: string; categoryName: string };
};

// Define props for the HomeScreen
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const categories = [
  { id: "1", name: "Fiction" },
  { id: "2", name: "Non-Fiction" },
];

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate("Category", {
                categoryId: item.id,
                categoryName: item.name,
              })
            }
          >
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};


export default HomeScreen;