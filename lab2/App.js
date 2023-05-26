import * as React from 'react';
import { Button, View,Text,Image,StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/HomeScreen';

export default function App() {
const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home" >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="contact me"  />
        <Drawer.Screen name="noor" />
        <Drawer.Screen name="messages"  />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


