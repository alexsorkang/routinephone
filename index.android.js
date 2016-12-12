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
export default class routinephone extends Component {
  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <View style={styles.headerblack}></View>
  //       <View style={styles.headerpink}></View>
  //       <View style={styles.headerblack}></View>
  //     </View>
  //   );
  // }
  // {name:'stronglift 5x5',description:'test text',shared:true, routine:{'split':2, 'list':[[['bench', 5,5],['rows', 3,8]],[['ohp',5,5],['deadlift',1,5]]]},difficulty:'novice'}
  render() {
    return (
      <Container>

        <Header style={styles.header}>
            <Button onPress={this.props.onBack} transparent>
              <Icon style={styles.iconcolor} name={'ios-arrow-back'} />
            </Button>
            
            <Title style={styles.titletext}>Routineapp</Title>
            
            <Button transparent>
              <Icon style={styles.iconcolor} name='ios-menu' />
            </Button>
          </Header>

        <Content>
          <Tabs>
            
            <Navigator
              initialRoute={{ id: 'Routine', index: 0 }}
              renderScene = {this.renderScene.bind(this)}
              tabLabel='Current'
            />
            <Progress tabLabel='Progress' />
            <PublicRoutines tabLabel='Public' />
          </Tabs>
        </Content>
      </Container>
    )
  }
  renderScene(route, navigator) {
    var routeid = route.id;
    if (routeid === 'Routine') {
      return (
        <CurrentRoutine navigator={navigator}/>
        );
    }
    if (routeid === 'exerciselist') {
      return (
        <Exerciselist navigator={navigator}/>
        );
        )
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
