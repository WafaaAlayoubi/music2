import React,{Component} from "react";
import { StyleSheet, FlatList ,Button} from "react-native";
import ListItem from "../ListItem/ListItem";


class SongsList extends Component {
    state = {

        track: false
    }
    onClicked = (number) => {
        this.setState({track: !this.state.track});
        this.props.onPressFav(number);
    }

    render() {

        return (
            <FlatList
                style={styles.listContainer}
                data={this.props.songs}
                extraData={this.state}
                renderItem={(info) => (
                    <ListItem
                        onPress={() => this.onClicked(info.item.number)}
                        favo={info.item.fav}
                        songName={info.item.name}
                        songImage={info.item.image}
                        onItemPressed={() => this.props.onItemSelected(info.item.key)}
                    />

                )}
            />
        );
    };
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});

export default SongsList;
