import React from 'react';
import AppNavigator from '@/src/navigation/AppNavigator'; // Adjust the path as needed
import { registerRootComponent } from 'expo';

function App() {
    return (
            <AppNavigator />
    );
}

export default App;

registerRootComponent(App);