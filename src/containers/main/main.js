import React, { Component } from 'react';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/platform';
import TracksSongs from '../TracksSongs/TracksSongs';
import Fav from '../fav/fav'
import {Songs} from '../Songs/Songs';
import { Icon, Badge, StyleProvider, Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';

var numberOfFav = 0;
export default class FooterTabsBadgeExample extends Component {

   state = {
     selectedTab: 'Songs'
   };

   componentWillMount(){
     this.numFav();
 };


   numFav (){
      numberOfFav = 0;
      for(var i =0 ;i<Songs.length ;i++){
      if(Songs[i].fav === true){
         numberOfFav = numberOfFav +1  ;
      }
   }

};

   static navigationOptions = {
      header: null,
   };

   renderSelectedTab () {
      this.numFav();
    switch (this.state.selectedTab) {
      case 'Songs':
        return (
           <TracksSongs />
        );
        break;
      case 'Albums':
        return (
           <Text>Albums</Text>
        );
        break;
      case 'Favorite':
        return (
           <Fav />
        );
        break;

        case 'Search':
         return (
            <Text>Search</Text>
         );
         break;
      default:
    }
  }

  render() {

    return (
      <StyleProvider style={getTheme(material)}>
      <Container>
        <Header />
        <Content>
         {this.renderSelectedTab()}
        </Content>
        <Footer>
          <FooterTab>

            <Button badge vertical
            active={this.state.selectedTab==='Songs'}
            onPress={() => this.setState({selectedTab: 'Songs'})}>
              <Badge><Text>{Songs.length}</Text></Badge>
              <Icon name="musical-notes" />
              <Text>My Music</Text>
            </Button>

            <Button active badge vertical
            active={this.state.selectedTab==='Albums'}
            onPress={() => this.setState({selectedTab: 'Albums'})}>
            <Badge ><Text>0</Text></Badge>
              <Icon name="albums" />
              <Text>Albums</Text>
            </Button>

            <Button active badge vertical
            active={this.state.selectedTab==='Favorite'}
            onPress={() => this.setState({selectedTab: 'Favorite'})}>
            <Badge ><Text>{numberOfFav}</Text></Badge>
              <Icon active name="star-half"/>
              <Text>Favorite</Text>
            </Button>

            <Button vertical
            active={this.state.selectedTab==='Search'}
            onPress={() => this.setState({selectedTab: 'Search'})}>
              <Icon name="search" />
              <Text>Search</Text>
            </Button>

          </FooterTab>
        </Footer>
      </Container>
      </StyleProvider>
    );
  }
}
