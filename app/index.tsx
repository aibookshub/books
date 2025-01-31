import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomePage  from '@/components/D1_Home';
import LocalGallery  from '@/components/D2_LocalGallery';
import RateTheApp from '@/components/D5_Rate5Star';
import 'expo-dev-client';

const Drawer = createDrawerNavigator();

export default function MainPage() {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    width: 250,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                },
            }}
        >
            <Drawer.Screen name="HomePage"   component={HomePage}   options={{ title: 'Online Books Hub' }} />
            <Drawer.Screen name="LocalGallery" component={LocalGallery} options={{ title: 'My Local Gallery' }} />
            <Drawer.Screen name="Rate"         component={RateTheApp}   options={{ title: '5 star!' }} />
        </Drawer.Navigator>
    );
}