import React, { Component } from 'react';
import FlipCard from 'react-native-flip-card';
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
  constructor(props) {
    super(props);
    this.state = {}
    var routine;
    routine = this.props.data;

    var arr = []
    routine.map(function(object,i) {
      arr.push(false);
    })
    

    // { bench: { weight: 0, reps: [ 5, 5, 5 ] },
        // rows: { weight: 0, reps: [ 5, 5, 5 ] }, 
        // squat: { weight: 0, reps: [ 5, 5, 5 ] } }

    var exercise = {};
    routine.map(function(object,i) {
      exercise[object[0]] = {};
      exercise[object[0]]['weight'] = 0;
      exercise[object[0]]['reps'] = Array(object[1]).fill(object[2])
      // for (var x = 0;x<object[1];x+=1) {
        // exercise[object[0]][x] = object[2];
        // Array(object[1]).fill(object[2]);
      // }

    })
    this.state = {
      flip: arr,
      exercise: {}
    } 
  }

  render() {
    return (
      <Navigator renderScene={this.renderScene.bind(this)} />
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
            {this.props.data.map(function(object, i){
              return(
                <FlipCard key={i + 'flipcard'} flip={this.state.flip[i]} style={{borderWidth:0}} clickable={false}>
                <View key={i + 'front1'} style={styles.face}>
                  <View key={i + 'front2'} style={styles.cardouter}>
                    <View key={i + 'front3'} style={styles.cardinner}>
                      <View key={i + 'front4'} style={{flexDirection:'row'}}>
                        <View key={i + 'front5'} style={[{flex:1}]}><Text onPress={this.weight.bind(this,i)} style={[styles.optiontext]}> {object[0]} - {this.props.data[i][3][this.props.data[i][3].length-1]}</Text></View>
                        <Text key={i + 'front6'} onPress={this.cardFlip.bind(this, i)} style={[]}>previous</Text>
                      </View>
                      <View key={i + 'front7'} style={styles.circlecontainer}>
                        {Array.from(Array(object[1])).map(function(obj, j) {
                          return (
                            <View key={i + j + 'front8'} style={[styles.circle, styles.doublecenter]}><Text style={styles.circletextcolor}>{object[2]}</Text></View>
                            )
                        }.bind(this))}
                      </View>
                    </View>
                  </View>
                </View>
                <View key={i + 'back1'} style={[styles.back, {borderWidth:0}]}>
                  <View key={i + 'back2'} style={styles.cardouter}> 
                    <View key={i + 'back3'} style={styles.cardinner}>
                      <View key={i + 'back4'} style={{flexDirection:'row'}}>
                        <Text key={i + 'back5'} style={[styles.optiontext, {flex:1}]}>{object[0]}</Text>
                        <Text key={i + 'back6'} onPress={this.cardFlip.bind(this, i)} style={[]}>back</Text>
                      </View>
                      <View key={i + 'back7'}>
                        <Text key={i + 'back8'} style={styles.optiontext}>new row</Text>
                      </View>
                    </View>
                  </View>
                </View>
                </FlipCard>
              )}.bind(this)
            )}
            <View style={styles.padding}>
              <Button onPress={this.save.bind(this)} block bordered> finish workout </Button>
            </View>
          </View>

        </Content>

      </Container>
    )
  }
  async save() {
    console.log(5)
  }
  weight(i) {
    console.log(i)
  }
  cardFlip(i) {
    var flipnew = this.state.flip;
    flipnew[i] = !flipnew[i];
    this.setState({flip: flipnew})
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
  padding: {
    padding: 10
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 40/2,
    backgroundColor: 'gray'
  },
  circletextcolor: {
    color: 'white'
  },
  doublecenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  circlecontainer: {
    flex:1, 
    flexDirection:'row',
    justifyContent:'space-between', 
    alignItems: 'center'
  },
  cardouter: {
    flex:1, 
    flexDirection:'column', 
    padding: 10, 
    paddingBottom: 0
  },
  cardinner: {
    height: 100, 
    padding: 10, 
    backgroundColor: 'white', 
    borderWidth: 1, 
    borderColor: "#ddd"
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