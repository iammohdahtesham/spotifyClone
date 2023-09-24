import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../assets/colors';
import {getAuthorization} from '../redux/Action';
import {SpotifySVG, GoogleSVG, FacebookSVG, PhoneSVG} from '../../assets/svgs';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const tokenId = useSelector(state => state.fetchAuth.data);

  useEffect(() => {
    dispatch(getAuthorization());
  }, []);

  console.log(tokenId);

  return (
    <SafeAreaView style={styles.main}>
      <SpotifySVG height={'20%'} width={'20%'} fill={Colors.white} />
      <Text style={styles.outerText}>
        Millions of songs{'\n'}
        <Text style={styles.innerText}>Free on Spotify.</Text>
      </Text>

      <TouchableOpacity style={styles.signUpButton} activeOpacity={0.8}>
        <Text style={styles.signUpText}>Sign up free</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <PhoneSVG height={28} width={28} />
        <TouchableOpacity style={styles.logInButton} activeOpacity={0.8}>
          <Text style={styles.logInText}>Continue with phone number</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <GoogleSVG height={28} width={28} />
        <TouchableOpacity style={styles.logInButton} activeOpacity={0.8}>
          <Text style={styles.logInText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <FacebookSVG height={28} width={28} />
        <TouchableOpacity style={styles.logInButton} activeOpacity={0.8}>
          <Text style={styles.logInText}>Continue with facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.logInButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Home Page')}>
          <Text style={styles.logInText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.black,
    flex: 1,
    alignItems: 'center',
    paddingTop: '40%',
  },
  outerText: {
    textAlign: 'center',
    color: Colors.white,
    fontWeight: '700',
    fontSize: 32,
    fontFamily: 'gothic',
  },
  innerText: {
    textAlign: 'center',
    color: Colors.white,
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: 0.64,
  },
  signUpButton: {
    borderRadius: 50,
    paddingVertical: '4%',
    marginTop: '11%',
    marginVertical: 5,
    width: '88%',
    backgroundColor: Colors.spotify,
  },
  signUpText: {
    fontSize: 21,
    fontWeight: '800',
    textAlign: 'center',
  },
  logInButton: {
    paddingVertical: '4%',
    width: '80%',
  },
  logInText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
  },
  buttonContainer: {
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    borderColor: Colors.white,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Login;
