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

import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, List, ListItem, Card, CardItem } from 'native-base';

import Theme from '../Themes/customtheme.js'


export default class Exerciselist extends Component {

  render() {
  return (
    <Navigator
      renderScene={this.renderScene.bind(this)}
      />
    )
  }
  renderScene(route, navigator) {
    return (
      <Container theme={Theme}>
        <Header style={styles.header}>
          <Button onPress={this.onBack.bind(this)} transparent>
            <Icon style={styles.iconcolor} name='ios-arrow-back' />
          </Button>
          
          <Title style={styles.titletext}>Exerciselist</Title>
          
          <Button transparent>
            <Icon style={styles.iconcolor} name='ios-menu' />
          </Button>

        </Header>

        <Content style={styles.contentcolor}>
          <View>
            <View style={{flex:1, flexDirection:'column', padding: 5}}>
              <View style={{height: 100, padding: 5, backgroundColor: 'white', borderWidth: 1, borderColor: "#ddd"}}>
                <Text style={{color: 'black'}}>this is padded text</Text>
              </View>
            </View>
            <View style={{flex:1, flexDirection:'column', paddingLeft: 5, paddingRight: 5}}>
              <View style={{height: 100, padding: 5, backgroundColor: 'white', borderWidth: 1, borderColor: "#ddd"}}>
                <Text style={{color: 'black'}}>this is padded text</Text>
              </View>
            </View>
            <View style={{flex:1, flexDirection:'column', padding: 5}}>
              <View style={{height: 100, padding: 5, backgroundColor: 'white' , borderWidth: 1, borderColor: "#ddd"}}>
                <Text style={{color: 'black'}}>this is padded text</Text>
              </View>
            </View>
          </View>

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
    // backgroundColor: '#4A4A4A'
    backgroundColor: 'white'
  },
  contentcolor: {
    backgroundColor: '#F7F7F7',
    // backgroundColor: 'white'
    // padding: 5,
    // paddingTop: 2,
    // paddingBottom: 0
  },
  iconcolor: {
    // color: 'white'
    color: 'black'
  },
  titletext: {
    // color: 'white'
    color: 'black'
  },
  optiontext: {
    // padding: 10,
    // fontSize: 20,
    // color: 'white',
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
  card: {
    padding: 10
  },
});