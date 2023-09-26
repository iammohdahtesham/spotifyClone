import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {Colors} from '../../assets/colors';
import {
  RecentSVG,
  SettingsSVG,
  BellSVG,
  HomeIcon,
  PlaylistIcon,
  SearchIcon,
} from '../../assets/svgs';
import MyTabs from '../navigation/TabNavigation';

const backgroundImage = require('../../assets/images/ScreenBG.png');
function timeOfDay() {
  let hour = new Date().getHours();
  return hour >= 4 && hour <= 11
    ? 'morning'
    : hour >= 12 && hour <= 16
    ? 'afternoon'
    : 'evening';
}

const Home = () => {
  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={styles.bg}>
      <SafeAreaView style={styles.main}>
        <ScrollView>
          <View style={styles.headingContainer}>
            <View style={styles.headerText}>
              <Text style={styles.heading}>Good {timeOfDay()} </Text>
            </View>

            <View style={styles.headerIcons}>
              <BellSVG color={Colors.white} height={30} width={30} />
              <RecentSVG color={Colors.white} height={30} width={30} />
              <SettingsSVG color={Colors.white} height={30} width={30} />
            </View>
          </View>

          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Trending Now</Text>
          </View>

          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Top picks for you</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  bg: {
    flex: 1,
  },
  heading: {
    fontSize: Dimensions.get('window').width < 400 ? 22 : 26,
    color: Colors.white,
    fontWeight: '700',
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '10%',
    paddingLeft: '5%',
  },
  headerText: {
    flexDirection: 'row',
    flex: 1,
  },
  headerIcons: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
    paddingLeft: '6%',
  },
  bottomTabContainer: {
    flex: 0.2,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  tabText: {
    paddingTop: 5,
    color: Colors.dullWhite,
    fontSize: 10,
    fontWeight: '600',
  },
  tabIcons: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Home;
