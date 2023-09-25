import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import {Colors} from '../../assets/colors';
import {SearchIcon} from '../../assets/svgs';
import MyTabs from '../navigation/TabNavigation';

const backgroundImage = require('../../assets/images/ScreenBG.png');
const Search = ({navigation}) => {
  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={styles.bg}>
      <SafeAreaView style={styles.main}>
        <ScrollView>
          <Text style={styles.heading}>Search</Text>
          <View style={styles.headerContainer}>
            <SearchIcon height={25} width={25} fill={Colors.gray} />
            <TextInput
              placeholder="Artists, songs, or podcasts"
              style={styles.inputBox}
            />
          </View>
          <Text style={styles.subheading}>Browse all</Text>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  main: {
    flex: 1,
  },
  heading: {
    fontSize: 42,
    paddingTop: '5%',
    fontWeight: '700',
    color: Colors.white,
    marginHorizontal: '3%',
  },
  inputBox: {
    backgroundColor: Colors.white,
    width: '90%',
    height: 55,
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: '5%',
    borderRadius: 6,
  },
  headerContainer: {
    marginVertical: '5%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    marginHorizontal: '3%',
    borderRadius: 6,
    paddingHorizontal: 5,
  },
  subheading: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: '800',
    marginHorizontal: '3%',
  },
});
export default Search;
