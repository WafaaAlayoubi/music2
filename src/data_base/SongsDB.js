import {localDB} from "./Constants";
import SQLite from "react-native-sqlite-storage";
import React from "react";

var db = SQLite.openDatabase(localDB.dbName, "1.0", "music Database", 200000);
var wafaa = [];

const fav = (props) => {
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
                    wafaa.add(1);
                    alert(wafaa[1]);

                }
            }
        }
    );
});
};

export {
    wafaa
};