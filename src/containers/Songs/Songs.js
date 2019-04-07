import React from 'react';
import {localDB} from "../../data_base/Constants";
import SQLite from "react-native-sqlite-storage";
var db = SQLite.openDatabase(localDB.dbName, "1.0", "music Database", 200000);

var fofo = 0;
var setTimePassed = () => {
    return true;
};

const wafaa = () => {
    db.transaction(tx => {
        tx.executeSql(
            "SELECT * FROM " + localDB.tableName.tblFav ,
            [],
            (tx, results) => {
                // Get rows with Web SQL Database spec compliance.
                setTimeout(()=>{}, 10000);
                var len = results.rows.length;
                if (len > 0) {
                    for (let i = 0; i < len; i++) {
                        let row = results.rows.item(i);
                    }
                    return 1;
                }
            }
        )
    });
};

export var Songs = [
 {

    fav:wafaa(),
     key: (Math.random()).toString(),
     number: 0,
    name: 'Thanksgiving',
    artist: 'Winston',
    image: "https://78.media.tumblr.com/e0cb83dc149ecfd2e8b39d0e2827aabe/tumblr_p6dy8ajAyR1tom83ho1_640.jpg",
    audioUrl: "http://russprince.com/hobbies/files/02%20Winston%20-%20Thanksgiving.mp3",
 },
 {
    fav:0,
     key: (Math.random()).toString(),
     number:1,
    name: 'Minute Waltz',
    artist: 'Chopin',
    image: "https://78.media.tumblr.com/8cc498ee34ff5694402cb2376f5c617b/tumblr_p64xvnsrAP1vwvx0xo1_1280.jpg",
    audioUrl: 'http://russprince.com/hobbies/files/09%20Chopin%20-%20Minute%20Waltz.mp3',
 },
 {
     fav:0,
     key: (Math.random()).toString(),
    name: 'Hotline Bling',
    number:2,
    artist: 'Drake',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
    audioUrl: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3',
 },
];
