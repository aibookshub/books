import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@/src/screens/HomeScreen';
import CategoryScreen from '@/src/screens/CategoryScreen';
import BooksScreen from '@/src/screens/BooksScreen';
import BookDetailScreen from '@/src/screens/BookDetailScreen';
import CustomDrawerContent from '@/src/components/CustomDrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Main Stack Navigator
const MainStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Books" component={BooksScreen} />
        <Stack.Screen name="BookDetail" component={BookDetailScreen} />
    </Stack.Navigator>
);

// Drawer Navigator
const AppNavigator = () => (
    <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
        <Drawer.Screen name="Main" component={MainStack} />
    </Drawer.Navigator>
);

export default AppNavigator;