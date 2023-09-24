import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../screens/HomeScreen';
import Search from '../screens/SearchScreen';
import Playlist from '../screens/PlaylistScreen';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          showicon: true,
          showlabel: false,
          lazyload: true,
          style: {
            backgroundcolor: 'transparent',
            bordertopwidth: 0,
            position: 'absolute',
            left: 50,
            right: 50,
            bottom: 20,
            height: 10,
          },
        }}
      />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Playlist" component={Playlist} />
      {/* <Tab.Screen name="Premium" component={} /> */}
    </Tab.Navigator>
  );
}

export default MyTabs;
