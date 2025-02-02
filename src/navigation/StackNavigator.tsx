import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "@/src/screens/HomeScreen";
import CategoryScreen from "@/src/screens/CategoryScreen";
import BooksScreen from "@/src/screens/BooksScreen";
import BookDetailScreen from "@/src/screens/BookDetailScreen";

const Stack = createStackNavigator();

const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Books" component={BooksScreen} />
        <Stack.Screen name="BookDetail" component={BookDetailScreen} />
    </Stack.Navigator>
);

export default StackNavigator;
