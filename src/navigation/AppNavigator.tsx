import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@/src/screens/HomeScreen';
// import SubcategoryScreen from '@/src/screens/SubcategoryScreen';
import BooksScreen from '@/src/screens/BooksScreen';
import Category1Screen from '@/src/screens/Category1Screen';
import Category2Screen from '@/src/screens/Category2Screen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Main Stack Navigator
const MainStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Category1" component={Category1Screen} />
        <Stack.Screen name="Category2" component={Category2Screen} />
        {/* <Stack.Screen name="Subcategory" component={SubcategoryScreen} /> */}
        <Stack.Screen name="Books" component={BooksScreen} />
    </Stack.Navigator>
);

// Drawer Navigator
const AppNavigator = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="Main" component={MainStack} />
        <Drawer.Screen name="Fiction" component={Category1Screen} />
        <Drawer.Screen name="Non-Fiction" component={Category2Screen} />
    </Drawer.Navigator>
);

export default AppNavigator;