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
    var routine = this.props.data;
    var arr = []
    routine.map(function(object,i) {
      arr.push(false);
    })
    this.state = {
      flip: arr
    }
    
  }
  render() {
    return (
      <Navigator renderScene={this.renderScene.bind(this)} />
    )
  }
  renderScene(route, navigator) {
    var routine = this.props.data;
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
            {routine.map(function(object, i){
              return(
                <FlipCard flip={this.state.flip[i]} style={{borderWidth:0}} clickable={false}>
                <View style={styles.face}>
                  <View key={i + 'front'} style={styles.cardouter}>
                    <View style={styles.cardinner}>
                      <View style={{flexDirection:'row'}}>
                        <Text style={[styles.optiontext, {flex:1}]}>{object[0]}</Text>
                        <Text onPress={this.cardFlip.bind(this, i)} style={[]}>view previous</Text>
                      </View>
                      <View style={styles.circlecontainer}>
                        {Array.from(Array(object[1])).map(function(obj, j) {
                          return (
                            <View style={[styles.circle, styles.doublecenter]}><Text style={styles.circletextcolor}>{object[2]}</Text></View>
                            )
                        }.bind(this))}
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.back, {borderWidth:0}]}>
                  <View key={i + 'back'} style={styles.cardouter}> 
                    <View style={styles.cardinner}>
                      <View style={{flexDirection:'row'}}>
                        <Text style={[styles.optiontext, {flex:1}]}>{object[0]}</Text>
                        <Text onPress={this.cardFlip.bind(this, i)} style={[]}>view current</Text>
                      </View>
                      <View>
                        <Text style={styles.optiontext}>new row</Text>
                      </View>
                    </View>
                  </View>
                </View>
                </FlipCard>
              )}.bind(this)
            )}

          </View>

        </Content>

      </Container>
    )
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