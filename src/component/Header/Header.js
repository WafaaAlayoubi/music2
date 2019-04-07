import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'native-base';

const Header = ({
  title,
  artist,
  onDownPress,
  onQueuePress,
  onMessagePress,
  backe
}) => (
   <View style={styles.container}>
      <TouchableOpacity onPress={backe}>
        <Icon name="arrow-round-back" style={{ color: "#ffffff" }}/>
      </TouchableOpacity>
      <View style={styles.detailsWrapper}>
         <Text style={styles.title} >{title}</Text>
         <Text style={styles.artist} >{artist}</Text>
      </View>

    </View>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 72,
    marginTop:20,
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
  },
  title: {
     flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  artist: {
     flex: 1,
   textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
    marginTop: 4,
  },
  detailsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    opacity: 0.72
  }
});
