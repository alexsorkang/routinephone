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
  Navigator,
  AsyncStorage
} from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, List, ListItem, Tabs } from 'native-base';

import Progress from './androidjs/Progress.android'
import PublicRoutines from './androidjs/PublicRoutines.android'
import Exerciselist from './androidjs/Exerciselist.android'
import Daylist from './androidjs/Daylist.android'
import Newroutine from './androidjs/Newroutine.android.js'

export default class routinephone extends Component {
  constructor() {
    super();
    this.state = {routine:{}};
  }
  
  componentDidMount() {
    this.set().done();
  }

  async set() {
    await AsyncStorage.setItem('currentexercise', JSON.stringify({name:'stronglift 5x5',description:'test text',shared:true, routine:{'split':2, 'list':[[['bench', 5,5],['rows', 3,8]],[['ohp',8,5],['deadlift',1,5]]]},difficulty:'novice'}));
    // currentexercise = await AsyncStorage.getItem('currentexercise');
    // currentexercise = JSON.parse(currentexercise);
    // this.setState(currentexercise);
    // console.log(this.state)
  }

  render() {
    // currentexercise = this.set();
    return (
        <Navigator
            // initialRoute={{ id: 'daylist', index: 0, data: {name:'stronglift 5x5',description:'test text',shared:true, routine:{'split':2, 'list':[[['bench', 5,5],['rows', 3,8]],[['ohp',8,5],['deadlift',1,5]]]},difficulty:'novice'}}}
            initialRoute={{ id: 'daylist', index: 0, data: this.state}}
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
        <Daylist navigator={navigator} data={route.data} />
        );
    }
    if (routeid === 'exerciselist') {
      return (
        <Exerciselist navigator={navigator} data={route.data} />
        );
    }
    if (routeid === 'progress') {
      return (
        <Progress navigator={navigator} data={route.data} />
        );
    }
    if (routeid === 'newroutine') {
      return (
        <Newroutine navigator={navigator} data={route.data} />
        );
    }
    if (routeid === 'public') {
      return (
        <PublicRoutines navigator={navigator} data={route.data} />
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
