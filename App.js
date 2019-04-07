import React, { Component } from 'react';
import {View} from 'react-native';
import TracksSongs from './src/containers/TracksSongs/TracksSongs';
import Player from './src/component/Player/Player';
import Main from './src/containers/main/main';
import Songs from './src/data_base/SongsDB';




export default class App extends Component {

  render() {
    return (
      <Main />
   );
  }
}
