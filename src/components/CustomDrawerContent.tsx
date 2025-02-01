// /components/CustomDrawerContent.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CustomDrawerContent = ({ navigation }) => {
  return (
    <View>
      <Text>Categories</Text>
      {categories.map((category) => (
        <TouchableOpacity key={category.id} onPress={() => navigation.navigate('Home', { categoryId: category.id })}>
          <Text>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CustomDrawerContent;