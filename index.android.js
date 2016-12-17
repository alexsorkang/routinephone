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

import CurrentRoutine from './androidjs/CurrentRoutine.android'
import Progress from './androidjs/Progress.android'
import PublicRoutines from './androidjs/PublicRoutines.android'
import Exerciselist from './androidjs/Exerciselist.android'
import Daylist from './androidjs/Daylist.android'
import Newroutine from './androidjs/Newroutine.android.js'

export default class routinephone extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{ id: 'daylist', index: 0 }}
            renderScene = {this.renderScene.bind(this)}
            tabLabel='Current'
            onBack={() => {
            if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
    )
  }
  onBack() {
    navigator.pop()
  }
  renderScene(route, navigator) {
    var routeid = route.id;
    if (routeid === 'daylist') {
      return (
        <Daylist navigator={navigator}/>
        );
    }
    if (routeid === 'exerciselist') {
      return (
        <Exerciselist navigator={navigator}/>
        );
    }
    if (routeid === 'progress') {
      return (
        <Progress navigator={navigator}/>
        );
    }
    if (routeid === 'newroutine') {
      return (
        <Newroutine navigator={navigator}/>
        );
    }
    if (routeid === 'public') {
      return (
        <PublicRoutines navigator={navigator}/>
        );
    }
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
