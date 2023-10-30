import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
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
    </Provider>
  );
};

export default App;
