import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './TabNavigation';

const Stack = createNativeStackNavigator();

export default function StackNavigationManager() {
  return (
    <NavigationContainer>
      <Stack.Navigator shifting={true} sceneAnimationType="shifting">
        <Stack.Screen
          name="LogIn"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home Page"
          component={MyTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
