import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screens/LoginScreen';
import Search from '../screens/SearchScreen';
import Playlist from '../screens/PlaylistScreen';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './TabNavigation';
import Home from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigationManager() {
  return (
    <NavigationContainer>
      <Stack.Navigator shifting={false}>
        <Stack.Screen
          name="LogIn"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home Page"
          component={MyTabs}
          options={{
            headerShown: false,
            animationEnabled: false,
            animationTypeForReplace: 'pop',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
