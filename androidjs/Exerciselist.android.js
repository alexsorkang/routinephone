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
import PublicRoutines from './PublicRoutines'
// import Exerciselist from './androidjs/Exerciselist'


export default class Exerciselist extends Component {
  render() {
    return (
        <Container>
          <Header style={styles.header}>
            <Button onPress={this.onBack.bind(this)} transparent>
              <Icon style={styles.iconcolor} name='ios-arrow-back' />
            </Button>
            
            <Title style={styles.titletext}>Exerciselist</Title>
            
            <Button transparent>
              <Icon style={styles.iconcolor} name='ios-menu' />
            </Button>

          </Header>

          <Content>
            <Text>Exercise Page</Text>
          </Content>

        </Container>
    )
  }
  onBack() {
    this.props.navigator.pop()
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F8F8F8'
  },
  iconcolor: {
    color: 'black'
  },
  titletext: {
    color: 'black'
  },
  optiontext: {
    padding: 10,
    fontSize: 20,
    color: 'black',
  },
  centertext: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    justifyContent: 'center',
    color: 'black',
  },
  headerblack: {
    // width: 50,
    flex: 1,
    height: 50,
    backgroundColor: 'black',
  },
  headerpink: {
    // width: 50,
    flex: 1,
    height: 50,
    backgroundColor: 'pink',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});