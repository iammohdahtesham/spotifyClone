// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

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

// // Example of Facebook Sign In integration in React Native
// // https://aboutreact.com/react-native-facebook-login/

// // Import React in our code
// import React, {useEffect} from 'react';
// import {Button, Text, View} from 'react-native';
// import {LoginManager} from 'react-native-fbsdk-next';
// import SplashScreen from 'react-native-splash-screen';
// function App(props) {
//   useEffect(() => {
//     SplashScreen.hide();
//   }, []);
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Facebook Login React Native Example</Text>
//       <Button
//         title={'Login with Facebook'}
//         onPress={() => {
//           LoginManager.logInWithPermissions(['public_profile', 'email']).then(
//             function (result) {
//               if (result.isCancelled) {
//                 alert('Login Cancelled ' + JSON.stringify(result));
//               } else {
//                 alert(
//                   'Login success with  permisssions: ' +
//                     result.grantedPermissions.toString(),
//                 );
//                 alert('Login Success ' + result.toString());
//               }
//             },
//             function (error) {
//               alert('Login failed with error: ' + error);
//             },
//           );
//         }}
//       />
//     </View>
//   );
// }
// export default App;
