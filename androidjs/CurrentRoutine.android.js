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
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, List, ListItem } from 'native-base';

export default class CurrentRoutine extends Component {
  // routine = {name:'stronglift 5x5',description:'test text',shared:true, routine:{'split':2, 'list':[[['bench', 5,5],['rows', 3,8]],[['ohp',5,5],['deadlift',1,5]]]},difficulty:'novice'}
  render() {
    return (
      <Navigator
        renderScene={this.renderScene.bind(this)}
        />
    )
  }
  renderScene(route, navigator) {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Text>one</Text>
            </ListItem>

            <ListItem>
              <Text>one</Text>
            </ListItem>

            <ListItem>
              <Text>one</Text>
            </ListItem>

            <ListItem>
              <Text style={styles.optiontext}>CurrentRoutine</Text> 
            </ListItem>

            <ListItem button onPress={this.onForward.bind(this)}>
              <Text style={styles.optiontext}>option 1</Text>
            </ListItem>

            <ListItem button onPress={this.onBack.bind(this)}>
              <Text style={styles.optiontext}>option 2</Text>
            </ListItem>

          </List>
        </Content>
      </Container>
      )
  }
  onForward() {
    this.props.navigator.push({
      id: 'exerciselist',
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