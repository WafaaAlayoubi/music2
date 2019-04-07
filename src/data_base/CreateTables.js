import React, { Component } from 'react';
import SQLite from 'react-native-sqlite-storage';
import { localDB } from './Constants';

export default class CreateTables extends Component {

    constructor(props) {
        super(props)
    }


    componentDidMount() {
        // const db = SQLite.openDatabase(localDB.dbName, '1.0', '', 1);
        var db = SQLite.openDatabase(localDB.dbName, "1.0", "music Database", 200000, this.openCB, this.errorCB);
        db.transaction(function (txn) {
            //txn.executeSql('DROP TABLE IF EXISTS ' + localDB.tableName.tblFav, []);
            txn.executeSql('CREATE TABLE IF NOT EXISTS ' + localDB.tableName.tblFav + ' (id  INTEGER PRIMARY KEY AUTOINCREMENT,fav BIT)', []);
            console.log('create databse success.')
        });
    }

    errorCB(err) {
        console.log("SQL Error: " + err);
    }

    successCB() {
        console.log("SQL executed fine");
    }

    openCB() {
        console.log("Database OPENED");
    }

    render() {
        return null
    }
}