/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, List, ListItem, Tabs } from 'native-base';

import CurrentRoutine from './androidjs/CurrentRoutine.android.js'
import Progress from './androidjs/Progress.android.js'
import PublicRoutines from './androidjs/PublicRoutines'
import Exerciselist from './androidjs/Exerciselist'
import Headerpage from './androidjs/Headerpage'

export default class routinephone extends Component {
  render() {
    return (
        <Container>
          <Header style={styles.header}>
            <Button transparent>
              <Icon style={styles.iconcolor} name='ios-arrow-back' />
            </Button>
            
            <Title style={styles.titletext}>Routineapp</Title>
            
            <Button transparent>
              <Icon style={styles.iconcolor} name='ios-menu' />
            </Button>
          </Header>
          <Content>
            <Tabs>
              <CurrentRoutine tabLabel='Current' />
              <Progress tabLabel='Progress' />
              <PublicRoutines tabLabel='Public' />
            </Tabs>
          </Content>
        </Container>
    )
  }
  onBack() {
    navigator.pop()
  }
}
        // <Outer data="one"/>
        // <Outer data="two"/>
        // <Outer data="three"/>
class Outer extends Component {
  render() {
    return (
      <Text>
        {this.props.data}
      </Text>
    );
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

AppRegistry.registerComponent('routinephone', () => routinephone);
