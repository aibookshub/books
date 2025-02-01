import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '@/src/navigation/AppNavigator'; // Adjust the path as needed
import { registerRootComponent } from 'expo';

function App() {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );
}

export default App;

// Register the app
registerRootComponent(App);