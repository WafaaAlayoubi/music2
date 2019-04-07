import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {Icon} from 'native-base';
import Ax from "../../hoc/Ax";

const listItem = (props) => {
    return (
        <View style={styles.listItem}>
            <TouchableOpacity onPress={props.onItemPressed} style={styles.music}>
                <Image resizeMode="cover" source={{uri: props.songImage}} style={styles.songImage} />
                <Text style={styles.textItem}>{props.songName}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onPress} >
                <Icon style={[props.favo ? styles.secondary : styles.off]}
                      name="star"/>
            </TouchableOpacity>
        </View>
    );

};

const styles = StyleSheet.create({
    secondary: {

        color: "#FFC300"
    },
    listItem: {
        width: "100%",
        marginBottom: 5,
        padding: 4,
        backgroundColor: "#eee",
        flexDirection: "row",
        alignItems: "center"
    },
    music: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center"
    },

    textItem: {
        color: '#39065D',
        fontSize: 20,
    },
    songImage: {
        marginRight: 17,
        height: 50,
        width: 50
    }
});

export default listItem;
