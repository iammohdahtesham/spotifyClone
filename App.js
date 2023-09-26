/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Login from './src/screens/LoginScreen';
import Home from './src/screens/HomeScreen';
import MyTabs from './src/navigation/TabNavigation.js';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import StackNavigationManager from './src/navigation/StackNavigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <StackNavigationManager />
      {/* <Home />
    <MyTabs /> */}
    </Provider>
  );
};

export default App;
