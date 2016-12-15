import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import IconSetList from './IconSetList';
// import IconList from './IconList';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, List, ListItem, Tabs } from 'native-base';

import CurrentRoutine from './CurrentRoutine.android.js'
import Progress from './Progress.android.js'
// import PublicRoutines from './androidjs/PublicRoutines'
import Exerciselist from './Exerciselist'


export default class PublicRoutines extends Component {
  render() {
    return (
        <Container>

          <Header style={styles.header}>
            <Button onPress={this.props.onBack} transparent>
              <Icon style={styles.iconcolor} name='ios-arrow-back' />
            </Button>
            
            <Title style={styles.titletext}>Public</Title>
            
            <Button transparent>
              <Icon style={styles.iconcolor} name='ios-menu' />
            </Button>

          </Header>
          <Content>
            <Text>PublicRoutines page</Text>
          </Content>
          <Footer>
            <FooterTab style={styles.footerstyle}>
              <Button>
                  <Text style="">Current</Text>
                  <Icon name='ios-apps-outline' style={styles.iconcolor} />
              </Button>
              <Button>
                  Camera
                  <Icon name='ios-camera-outline' style={styles.iconcolor}/>
              </Button>
              <Button>
                  Navigate
                  <Icon name='ios-compass' style={styles.iconcolor}/>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F8F8F8'
    // backgroundColor: '#DBDDDE'
  },
  footerstyle: {
    backgroundColor: '#F8F8F8'
  },
  iconcolor: {
    color: 'black'
  },
  titletext: {
    color: 'black'
  },
  optiontext: {
    // padding: 10,
    // fontSize: 20,
    color: 'black',
  },
  centertext: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    justifyContent: 'center',
    color: 'black',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});