import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Platform,
  FlatList,
  Image,
  Pressable,
} from 'react-native';
import {Colors} from '../../assets/colors';
import {RecentSVG, SettingsSVG, BellSVG} from '../../assets/svgs';
import {SampleSongs} from '../../assets/songs/SampleSongs';

const backgroundImage = require('../../assets/images/ScreenBG.png');
function timeOfDay() {
  let hour = new Date().getHours();
  return hour >= 4 && hour <= 11
    ? 'morning'
    : hour >= 12 && hour <= 16
    ? 'afternoon'
    : 'evening';
}

const Home = ({token}) => {
  const [newData, setData] = useState([]);
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.spotify.com/v1/browse/categories?country=IN&offset=0',
    headers: {
      Authorization: 'Bearer ' + token.route.params.token,
    },
  };
  useEffect(() => {
    axios
      .request(config)
      .then(response => {
        setData(response.data.categories.items);
        console.log(newData);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={styles.bg}>
      <ScrollView>
        <SafeAreaView style={styles.main}>
          <View style={styles.headingContainer}>
            <View style={styles.headerText}>
              <Text style={styles.heading}>Good {timeOfDay()}</Text>
            </View>
            <View style={styles.headerIcons}>
              <BellSVG color={Colors.white} height={30} width={30} />
              <RecentSVG color={Colors.white} height={30} width={30} />
              <SettingsSVG color={Colors.white} height={30} width={30} />
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttons}>
              <Text>Press here</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
              <Text>Press here</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttons}>
              <Text>Press here</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
              <Text>Press here</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttons}>
              <Text>Press here</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
              <Text>Press here</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Trending Now</Text>
          </View>
          <FlatList
            horizontal
            inverted
            data={newData}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <View style={styles.listContainer}>
                  <TouchableOpacity>
                    <ImageBackground
                      source={{uri: item.icons[0].url}}
                      borderRadius={5}
                      style={styles.listImage}
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Top picks for you</Text>
          </View>
          <FlatList
            horizontal
            data={SampleSongs}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity style={styles.trendingSection}>
                  <Image
                    source={{uri: item.artwork}}
                    style={styles.listImage}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </SafeAreaView>
      </ScrollView>
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
    fontSize: Dimensions.get('window').width < 400 ? 22 : 25,
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
  buttonsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    marginHorizontal: '1%',
    justifyContent: 'space-evenly',
    height: Dimensions.get('screen').height * 0.07,
  },
  buttons: {
    width: '45%',
    height: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    button: 'center',
    backgroundColor: Colors.button,
  },
  trendingSection: {
    marginLeft: Dimensions.get('screen').width * 0.03,
  },
  listContainer: {
    flex: 0.5,
    alignItems: 'center',
  },
  listImage: {
    height: Dimensions.get('screen').height * 0.19,
    width:
      Platform.OS != 'android'
        ? Dimensions.get('screen').width * 0.34
        : Dimensions.get('screen').width * 0.43,
    borderRadius: 3,
    margin: Dimensions.get('screen').width * 0.02,
  },
  listText: {
    color: Colors.white,
    marginTop: Platform.OS === 'android' ? '41%' : '45%',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    alignContent: 'flex-end',
  },
});
export default Home;
