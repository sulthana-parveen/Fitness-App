import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import Statistics from './Statistics';
import Notification from './Notification';
import Icon from 'react-native-vector-icons/Entypo'
import Account from './Account';
const BottomTabNav = createBottomTabNavigator();
const BottomTab = () => {
  return (
  
    <BottomTabNav.Navigator  screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Statistics') {
            iconName = focused ? 'bar-graph' : 'bar-graph';
          }else if (route.name === 'Notification') {
            iconName = focused ? 'notification' : 'notification';
          }else if (route.name === 'Account') {
            iconName = focused ? 'user' : 'user';
          }

          // Return the Icon component
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#D0FD3E',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: { backgroundColor: '#333' },
      })}>
        <BottomTabNav.Screen name='Home' component={HomeScreen}/>
        <BottomTabNav.Screen name='Statistics' component={Statistics}/>
        <BottomTabNav.Screen name='Notification' component={Notification}/>
        <BottomTabNav.Screen name='Account' component={Account}/>
    </BottomTabNav.Navigator>
  
  )
}

export default BottomTab