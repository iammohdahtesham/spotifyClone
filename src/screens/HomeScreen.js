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
import {useRoute} from '@react-navigation/native';

const backgroundImage = require('../../assets/images/ScreenBG.png');
function timeOfDay() {
  let hour = new Date().getHours();
  return hour >= 4 && hour <= 11
    ? 'morning'
    : hour >= 12 && hour <= 16
    ? 'afternoon'
    : 'evening';
}

const ListItem = ({item}) => {
  return (
    <View style={styles.listContainer}>
      <TouchableOpacity style={styles.listItem}>
        <ImageBackground
          source={{uri: item.icons[0].url}}
          borderRadius={5}
          style={styles.listImage}>
          <Text style={styles.listText}>{item.name}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const Home = ({token}) => {
  const [data, setData] = useState([]);
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

        <FlatList
          pagingEnabled
          horizontal
          initialNumToRender={10}
          maxToRenderPerBatch={2}
          windowSize={1}
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <ListItem item={item} />;
          }}
        />

        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Trending Now</Text>
        </View>

        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Top picks for you</Text>
        </View>
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
  listContainer: {
    flex: 0.5,
    alignItems: 'center',
  },
  listItem: {
    height: 100,
    width: '88%',
    backgroundColor: 'brown',
    marginVertical: '5%',
    borderRadius: 5,
  },
  listText: {
    color: Colors.white,
    marginTop: Platform.OS === 'android' ? '41%' : '45%',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    alignContent: 'flex-end',
  },
  listImage: {
    height: '100%',
    width: '100%',
  },
});
export default Home;
