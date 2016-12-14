import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import IconSetList from './IconSetList';
// import IconList from './IconList';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, List, ListItem, Tabs} from 'native-base';

// import CurrentRoutine from './CurrentRoutine.android.js'
// import Progress from './Progress.android.js'
// import PublicRoutines from './PublicRoutines'
import Exerciselist from './Exerciselist.android'
import Daylist from './Daylist.android'

export default class CurrentRoutine extends Component {
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});