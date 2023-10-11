import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  FlatList,
  Image,
  Platform,
} from 'react-native';
import {Colors} from '../../assets/colors';
import {SearchIcon} from '../../assets/svgs';
import MyTabs from '../navigation/TabNavigation';

const backgroundImage = require('../../assets/images/ScreenBG.png');
const Search = ({token}) => {
  const [data, setData] = useState([]);
  console.log(JSON.stringify(token.route.params.token));
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
      <ScrollView>
        <SafeAreaView style={styles.main}>
          <Text style={styles.heading}>Search</Text>
          <View style={styles.headerContainer}>
            <SearchIcon height={25} width={25} fill={Colors.gray} />
            <TextInput
              placeholder="Artists, songs, or podcasts"
              style={styles.inputBox}
            />
          </View>
          <Text style={styles.subheading}>Browse all</Text>
          <FlatList
            numColumns={2}
            key={2}
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
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
            }}
          />
        </SafeAreaView>
      </ScrollView>
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
export default Search;
