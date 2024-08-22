import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import AuthScreen from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';
import BottomTab from './src/screens/BottomTab';

const Stack = createStackNavigator();
const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name='Splash' component={SplashScreen}/>
      <Stack.Screen name='OnBoardingScreen' component={OnBoardingScreen}/>
      <Stack.Screen name='AuthScreen' component={AuthScreen}/>
      <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      <Stack.Screen name='BottomTab' component={BottomTab}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App