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

import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, List, ListItem, Tabs } from 'native-base';

import CurrentRoutine from './CurrentRoutine.android.js'
import Progress from './Progress.android.js'
// import PublicRoutines from './PublicRoutines'
import Exerciselist from './Exerciselist'
import Newroutine from './Newroutine.android.js'
import Theme from '../Themes/customtheme.js'

export default class PublicRoutines extends Component {
  render() {
    return (
      <Navigator
        renderScene={this.renderScene.bind(this)}
        />
      )
    }
  renderScene(route, navigator) {
    return(
      <Container theme={Theme}>
        <Header style={styles.header}>
          <Button onPress={this.props.onBack} transparent>
            <Icon style={styles.iconcolor} name='ios-arrow-back' />
          </Button>
          
          <Title style={styles.titletext}>Progress</Title>
          
          <Button transparent>
            <Icon style={styles.iconcolor} name='ios-menu' />
          </Button>

        </Header>
        <Content style={styles.contentcolor}>
          <Text style={styles.optiontext}>Progress page</Text>
        </Content>
        <Footer>
          <FooterTab style={styles.header}>
            <Button onPress={this.onCurrent.bind(this)}>
                Current
                <Icon name='ios-flash'/>
            </Button>
            <Button active>
                Progress
                <Icon name='md-trending-up'/>
            </Button>
            <Button>
                Public
                <Icon name='ios-compass'/>
            </Button>
            <Button>
                Create
                <Icon name='ios-add'/>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
  onCurrent(){
    this.props.navigator.push({
      id: 'daylist',
      index: 1
      })
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4A4A4A'
    // backgroundColor: '#DBDDDE'
  },
  contentcolor: {
    backgroundColor: '#2B2B2B'
  },
  iconcolor: {
    color: 'white'
  },
  titletext: {
    color: 'white'
  },
  optiontext: {
    // padding: 10,
    // fontSize: 20,
    color: 'white',
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