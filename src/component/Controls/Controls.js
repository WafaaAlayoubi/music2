import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'native-base';

const Controls = ({
  paused,
  shuffleOn,
  repeatOn,
  onPressPlay,
  onPressPause,
  onBack,
  onForward,
  onPressShuffle,
  onPressRepeat,
  forwardDisabled,
}) => {
   return(
  <View style={styles.container}>
    <TouchableOpacity activeOpacity={0.0} onPress={onPressShuffle}>
      <Icon  name="shuffle" style={[styles.secondaryControl, shuffleOn ? [] : styles.off]} />
    </TouchableOpacity>
    <View style={{width: 40}} />
    <TouchableOpacity onPress={onBack}>
      <Icon name="skip-backward" style={{ color: "#ffffff" }}/>
    </TouchableOpacity>
    <View style={{width: 20}} />
    {!paused ?
      <TouchableOpacity onPress={onPressPause}>
        <View style={styles.playButton}>
          <Icon name="pause" style={{ color: "#ffffff" }}/>
        </View>
      </TouchableOpacity> :
      <TouchableOpacity onPress={onPressPlay}>
        <View style={styles.playButton}>
          <Icon name="play" style={{ color: "#ffffff" }}/>
        </View>
      </TouchableOpacity>
    }
    <View style={{width: 20}} />
    <TouchableOpacity onPress={onForward}>
      <Icon name="skip-forward" style={{ color: "#ffffff" }}/>
    </TouchableOpacity>
    <View style={{width: 40}} />
    <TouchableOpacity activeOpacity={0.0} onPress={onPressRepeat}>
      <Icon style={[styles.secondaryControl, repeatOn ? [] : styles.off]}
        name="repeat"/>
    </TouchableOpacity>
  </View>
);
};

export default Controls;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
  },
  playButton: {
    height: 72,
    width: 72,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryControl: {

    color: "#ffffff"
  },
  off: {
    opacity: 0.30,
  }
})
