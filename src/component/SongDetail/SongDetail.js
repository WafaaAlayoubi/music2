import React from "react";
import Player from '../Player/Player';
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

const SongDetail = props => {
  let modalContent = null;
  modalContent = (
      <Player
      onClicked={props.onModalClosed}
      selectedSong={props.selectedSong}/>
    );

  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedSong !== null}
      animationType="slide"
    >
       {modalContent}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  songImage: {
    width: "100%",
    height: 200
  },
  songName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  }
});

export default SongDetail;
