import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/HomeScreen';
import Search from '../screens/SearchScreen';
import Playlist from '../screens/PlaylistScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        showicon: true,
        showlabel: false,
        lazyload: true,
        tabBarStyle: {
          backgroundcolor: 'rgba(0,0,0,0.5)',
          bordertopwidth: 0,
          elevation: 15,
          height: 50,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          showicon: true,
          showlabel: false,
          lazyload: true,
          style: {
            backgroundcolor: 'black',
            bordertopwidth: 0,
            position: 'absolute',
            left: 50,
            right: 50,
            bottom: 20,
            height: 10,
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Playlist"
        component={Playlist}
        options={{headerShown: false}}
      />
      {/* <Tab.Screen name="Premium" component={} /> */}
    </Tab.Navigator>
  );
}

export default MyTabs;
