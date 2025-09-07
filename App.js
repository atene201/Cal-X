import { StyleSheet, Text, View } from 'react-native';
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import WelcomeScreen from './app/assets/screens/WelcomeScreen';
import CameraMode from './app/assets/screens/CameraMode';
import ScreenShotPreview from './app/assets/screens/ScreenShotPreview';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false, gestureEnabled: false}} />
        <Stack.Screen name="CameraMode" component={CameraMode} options={{headerShown: false, gestureEnabled: false}} />
        <Stack.Screen name="ScreenShotPreview" component={ScreenShotPreview} options={{headerShown: false, gestureEnabled: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}