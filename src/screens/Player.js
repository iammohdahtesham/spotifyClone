import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import Slider from '@react-native-community/slider';
import TrackPlayer, {State} from 'react-native-track-player';
import {DownIcon} from '../../assets/svgs';
import {Line} from 'react-native-svg';

const backgroundImage = require('../../assets/images/playerbg.png');

const Player = () => {
  return (
    <Modal isVisible={true} style={styles.main}>
      <LinearGradient colors={['#585248', '#3d3932', '#272421']}>
        <DownIcon />
      </LinearGradient>
    </Modal>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
  },
  bg: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

export default Player;
