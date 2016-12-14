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

import CurrentRoutine from './CurrentRoutine.android.js'
import Progress from './Progress.android.js'
import PublicRoutines from './PublicRoutines'


export default class Headerpage extends Component {
  render() {
    return (
      <Navigator
        renderScene={this.renderScene.bind(this)}
        />
    )
  }
  renderScene(route, navigator) {
    var stronglift = {name:'stronglift 5x5',description:'test text',shared:true, routine:{'split':2, 'list':[[['bench', 5,5],['rows', 3,8]],[['rest',0,0]],[['rest',0,0]],[['ohp',5,5],['deadlift',1,5]]]},difficulty:'novice'}
    return (

      <Container>
        <Header style={styles.header}>
          <Button onPress={this.onBack.bind(this)} transparent>
            <Icon style={styles.iconcolor} name='ios-arrow-back' />
          </Button>
          
          <Title style={styles.titletext}>Routineapp</Title>
          
          <Button transparent>
            <Icon style={styles.iconcolor} name='ios-menu' />
          </Button>
        </Header>
        <Content>
        </Content>
        <Footer >
          <FooterTab style={styles.footerstyle} tabBarTextColor='black'>
              <Button onPress={this.onForward.bind(this)}>
                  <Text style={styles.optiontext}> Current </Text>
                  <Icon style={styles.iconcolor} name='ios-apps-outline' />
              </Button>
              <Button>
                  Camera
                  <Icon name='ios-camera-outline' style={styles.iconcolor}/>
              </Button>
              <Button>
                  Navigate
                  <Icon name='ios-compass' style={styles.iconcolor}/>
              </Button>
              <Button>
                  Contact
                  <Icon name='ios-contact-outline' style={styles.iconcolor}/>
              </Button>
          </FooterTab>
      </Footer>
      </Container>
      )
  }
  onForward() {
    this.props.navigator.push({
      id: 'daylist',
      index: 1,
    })
  }
  onBack() {
    this.props.navigator.pop()
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F8F8F8'
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