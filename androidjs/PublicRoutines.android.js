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
          <Button onPress={this.props.onBack.bind(this)} transparent>
            <Icon style={styles.iconcolor} name='ios-arrow-back' />
          </Button>
          
          <Title style={styles.titletext}>Public</Title>
          
          <Button transparent>
            <Icon style={styles.iconcolor} name='ios-menu' />
          </Button>

        </Header>
        <Content style={styles.contentcolor}>
          <Text style={styles.optiontext}>Public page</Text>
        </Content>
        <Footer>
          <FooterTab style={styles.header}>
            <Button onPress={this.onCurrent.bind(this)}>
                Current
                <Icon name='ios-flash'/>
            </Button>
            <Button onPress={this.onProgress.bind(this)}>
                Progress
                <Icon name='ios-trending-up'/>
            </Button>
            <Button active>
                Public
                <Icon name='md-browsers'/>
            </Button>
            <Button onPress={this.onNew.bind(this)}>
                Create
                <Icon name='ios-add'/>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
  onCurrent(){
    this.props.navigator.pop()
  }
  onProgress() {
    this.props.navigator.push({
      id: 'progress',
      index: 1,
    })
  }
  // onPublic() {
  //   this.props.navigator.pop()
  //   this.props.navigator.push({
  //     id: 'public',
  //     index: 1,
  //   })
  // }
  onNew() {
    this.props.navigator.push({
      id: 'newroutine',
      index: 1,
    })
  }
  onBack() {
    this.props.navigator.pop()
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