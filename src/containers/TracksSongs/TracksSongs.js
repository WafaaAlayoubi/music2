import React, { Component } from 'react';
import Player from '../../component/Player/Player';
import SongDetail from '../../component/SongDetail/SongDetail';
import SongsList from '../../component/SongsList/SongsList';
import {Songs} from '../Songs/Songs';
import { localDB } from '../../data_base/Constants';
import SQLite from "react-native-sqlite-storage";
import CreateTables from '../../data_base/CreateTables';
var db = SQLite.openDatabase(localDB.dbName, "1.0", "music Database", 200000);
//type Props = {};

import { StyleSheet, View , TouchableHighlight, Text} from "react-native";


export default class TracksSongs extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedSong: null,
            favoratie: [],
        };
    };

    componentWillMount(){
        db.transaction(tx => {
            tx.executeSql(
                "SELECT * FROM " + localDB.tableName.tblFav ,
                [],
                (tx, results) => {
                    // Get rows with Web SQL Database spec compliance.
                    var len = results.rows.length;
                    if (len > 0) {
                        for (let i = 0; i < len; i++) {
                            let row = results.rows.item(i);
                            var fav = row.fav;
                            this.setState(prevState => {
                                return {
                                    favoratie: [...prevState.favoratie,fav],
                                };
                            });
                        }
                    }
                }
            );
        });
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
    login(){
        db.transaction(function(txn) {
            txn.executeSql(
                "INSERT INTO " +
                localDB.tableName.tblFav +
                " (fav) VALUES (:fav)",
                [
                    1,
                ]
            );
        });
    };
    drop = () => {
        db.transaction(function (txn) {
        txn.executeSql('DROP TABLE IF EXISTS ' + localDB.tableName.tblFav, []);
        });
    };
test = () => {
    db.transaction(tx => {
        tx.executeSql(
            "SELECT * FROM " + localDB.tableName.tblFav ,
            [],
            (tx, results) => {
                // Get rows with Web SQL Database spec compliance.
                var len = results.rows.length;
                if (len > 0) {
                    for (let i = 0; i < len; i++) {
                        let row = results.rows.item(i);
                        var fav = row.fav;
                        alert("Employee Id:" + row.id + "fav : "+ row.fav);


                    }
                }
            }
        );
    });
};
   onFavHandler = (number) => {

     // var fav ;
     // var fav2;
     Songs[number].fav =!Songs[number].fav;
     // if (Songs[number].fav){
     //     fav2 = 1;
     // }else
     //     fav2 = 0;
     //
     //   db.transaction(function(txn) {
     //       alert("wafaa : " + Songs[number].fav + fav2);
     //       txn.executeSql(
     //           "UPDATE " +
     //           localDB.tableName.tblFav +
     //           " SET fav = "+fav2 +
     //           " WHERE id= "+(number+1)
     //       );
     //
     //   });
     //
     //   db.transaction(tx => {
     //       tx.executeSql(
     //           "SELECT * FROM " + localDB.tableName.tblFav + " WHERE id= "+(number+1),
     //           [],
     //           (tx, results) => {
     //               // Get rows with Web SQL Database spec compliance.
     //               var len = results.rows.length;
     //               if (len > 0) {
     //                   for (let i = 0; i < len; i++) {
     //                       let row = results.rows.item(i);
     //                       fav = row.fav;
     //                       alert("Employee Id:" + row.id + "fav : "+ row.fav);
     //                       //Songs[number].fav = row.fav;
     //
     //
     //                   }
     //               }
     //           }
     //       );
     //   });

      this.forceUpdate();
   };
   favView (){
       for(let j = 0 ;j< this.state.favoratie.length;j++)
       {
           alert("j is: " +j+" value: "+this.state.favoratie[j]);
       }
   };

  render() {
    return(
      <View style={styles.container}>
          <CreateTables />
          <TouchableHighlight onPress={this.favView.bind(this)}>
              <Text >{this.state.favoratie[0]}</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.drop}>
              <Text >drop</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.login}>
              <Text >login</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.test}>
              <Text >test</Text>
          </TouchableHighlight>
      <SongDetail
          selectedSong={this.state.selectedSong}
          onModalClosed={this.modalClosedHandler}
        />
        <SongsList
         onPressFav={this.onFavHandler}
          songs={Songs}
         fav = {this.state.favoratie}
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
