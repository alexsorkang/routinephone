import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import IconSetList from './IconSetList';
// import IconList from './IconList';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, List, ListItem } from 'native-base';

export default class CurrentRoutine extends Component {
  render() {
    return (
        <Container>
          <Content>
            <Text>Public Page</Text>
          </Content>

        </Container>
    )
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
    padding: 10,
    fontSize: 20,
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