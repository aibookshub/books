import React from 'react';
import 'expo-dev-client';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';


export default function RootLayout() {
    return (
        <>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false, }} />
                <Stack.Screen name="about" options={{ headerShown: false }} />
                <Stack.Screen name="ycc" options={{ headerShown: false }} />
            </Stack>
            <StatusBar style="light" translucent />
        </>
    );
}
