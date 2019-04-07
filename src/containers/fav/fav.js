import React, { Component } from 'react';
import { StyleSheet, View,Text } from "react-native";
import SongDetail from '../../component/SongDetail/SongDetail';
import SongsList from '../../component/SongsList/SongsList';
import {Songs} from '../Songs/Songs';

var favSongs = [];
var numberOfFav = 0;
export default class TracksSongs extends Component {

   state = {
    selectedSong: null,
  };
  componentWillMount(){
     this.isFav();
 }


  modalClosedHandler = () => {
    this.setState({
      selectedSong: null
    });
  };

  songSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedSong: Songs.find(song => {
          return song.key === key;
        })
      };
    });
  };

   onFavHandler = (number) => {
      Songs[number].fav =!Songs[number].fav;
      this.isFav();
      this.forceUpdate();
   };

   isFav = () => {
      favSongs =[];
      for(var i =0 ;i<Songs.length ;i++){
      if(Songs[i].fav === true){
         favSongs.push(Songs[i]);
      }
   }
};
   render(){
      return(
         <View style={styles.container}>
         <SongDetail
             selectedSong={this.state.selectedSong}
             onModalClosed={this.modalClosedHandler}
           />
           <SongsList
            onPressFav={this.onFavHandler}
             songs={favSongs}
             onItemSelected={this.songSelectedHandler}
           />
         </View>

      );
   }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
