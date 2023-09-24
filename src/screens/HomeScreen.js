import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../assets/colors';
import {RecentSVG, SettingsSVG, BellSVG} from '../../assets/svgs';

const backgroundImage = require('../../assets/images/ScreenBG.png');
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
              <Text style={styles.heading}>Made for you</Text>
            </View>

            <View style={styles.headerIcons}>
              <BellSVG color={Colors.white} />
              <RecentSVG color={Colors.white} />
              <SettingsSVG color={Colors.white} />
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
    fontSize: 26,
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
    justifyContent: 'space-around',
    paddingRight: '2%',
  },
});
export default Home;
