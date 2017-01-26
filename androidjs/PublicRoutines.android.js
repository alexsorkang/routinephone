import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  AsyncStorage
} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import IconSetList from './IconSetList';
// import IconList from './IconList';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, List, ListItem, Tabs } from 'native-base';

import Progress from './Progress.android.js'
// import PublicRoutines from './PublicRoutines'
import Exerciselist from './Exerciselist'
import Newroutine from './Newroutine.android.js'
import Theme from '../Themes/customtheme.js'

export default class PublicRoutines extends Component { 
  constructor() {
    super();
    // this.state = {routine:{}};
  }
  
  componentDidMount() {
    this.get().done();
  }

  async get() {
    // await AsyncStorage.setItem('currentexercise', JSON.stringify({name:'stronglift 5x5',description:'test text',shared:true, routine:{'split':2, 'list':[[['bench', 5,5],['rows', 3,8]],[['ohp',8,5],['deadlift',1,5]]]},difficulty:'novice'}));
    var mylist = await AsyncStorage.getItem('mylist');
    mylist = JSON.parse(mylist);
    this.setState(mylist);
    console.log(this.state)
  }

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
          <Button onPress={this.onBack.bind(this)} transparent>
            <Icon style={styles.iconcolor} name='ios-arrow-back' />
          </Button>
          
          <Title style={styles.titletext}>Public</Title>
          
          <Button transparent>
            <Icon style={styles.iconcolor} name='ios-menu' />
          </Button>



        </Header>
        <Content style={styles.contentcolor}>

        </Content>


        <Footer>
          <FooterTab style={styles.footer}>
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
                <Icon name='md-copy'/>
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
    this.props.navigator.push({
      id: 'daylist',
      index: 1,
    })
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
    // backgroundColor: '#4A4A4A'
    backgroundColor: '#F7F7F7'
  },
  footer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderTopColor: '#D7D7D7'
  },
  contentcolor: {
    // backgroundColor: '#2B2B2B'
    backgroundColor: 'white'
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
});