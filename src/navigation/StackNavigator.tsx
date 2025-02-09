import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "@/src/types"; 

import HomeScreen from "@/src/screens/Cat1HomeScreen";
import Cat2Screen from "@/src/screens/Cat2SubScreen";
import BooksScreen from "@/src/screens/BookListScreen";
import BookDetailScreen from "@/src/screens/BookDetailScreen";

// const Stack = createStackNavigator();
const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
            options={{
                title: "Book Category",
                headerShown: false,
                headerStyle: { backgroundColor: "#f8f8f8" },
                headerTintColor: "#333",
                gestureEnabled: true,
                headerRight: () => (<TouchableOpacity onPress={() => alert("Settings")}><Text></Text></TouchableOpacity>),
            }}
            listeners={{
                focus: () => console.log("BookDetail focused"),
            }}
        />

        <Stack.Screen name="Category" component={Cat2Screen}
            options={({ route }) => ({
                title: route.params?.categoryName || "Category",
                headerShown: true,
                headerStyle: { backgroundColor: "#f8f8f8" },
                headerTintColor: "#333",
                gestureEnabled: true,
                headerRight: () => (<TouchableOpacity onPress={() => alert("Settings")}><Text></Text></TouchableOpacity>),
            })}
            listeners={{
                focus: () => console.log("BookDetail focused"),
            }}
        />

        <Stack.Screen   name="Books"    component={BooksScreen}
            options={({ route }) => ({
                title: route.params?.categoryName || "Book 2 List",
                headerShown: true,
                headerStyle: { backgroundColor: "#f8f8f8" },
                headerTintColor: "#333",
                gestureEnabled: true,
                headerRight: () => (
                    <TouchableOpacity onPress={() => alert("Settings")}>
                        <Text></Text>
                    </TouchableOpacity>
                ),
            })}
            listeners={{
                focus: () => console.log("Books screen focused"),
            }}
        />

        <Stack.Screen name="BookDetail" component={BookDetailScreen}
            options={({ route }) => ({
                title: route.params?.book.title || "Book Details",
                headerShown: true,
            })}
            listeners={{
                focus: () => console.log("BookDetail focused"),
            }}
        />
    </Stack.Navigator>
);

export default StackNavigator;
