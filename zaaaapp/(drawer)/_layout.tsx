import { createDrawerNavigator } from '@react-navigation/drawer';
import { Slot } from 'expo-router';

const Drawer = createDrawerNavigator();

export default function DrawerLayout() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="index" options={{ title: 'Home' }}>
        {() => <Slot />}
      </Drawer.Screen>
      <Drawer.Screen name="search" options={{ title: 'Search' }}>
        {() => <Slot />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}
