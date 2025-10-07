import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importing my screen components
import SignIn from './screens/sign_in';
import Home from './screens/home';
import Camera from './screens/camera';
import Photo from './screens/photo';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signIn">
        <Stack.Screen name="signIn" component={SignIn} options={{ headerShown: false , gestureEnabled: false }} />
        <Stack.Screen name="home" component={Home} options={{ headerShown: false , gestureEnabled: false }} />
        <Stack.Screen name="camera" component={Camera} options={{ headerShown: false , gestureEnabled: false }} />
        <Stack.Screen name ="photo" component={Photo} options={{ headerShown: false , gestureEnabled: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}