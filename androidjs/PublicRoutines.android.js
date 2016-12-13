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

import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, List, ListItem, Tabs } from 'native-base';

import CurrentRoutine from './CurrentRoutine.android.js'
import Progress from './Progress.android.js'
// import PublicRoutines from './androidjs/PublicRoutines'
import Exerciselist from './Exerciselist'


export default class PublicRoutines extends Component {
  render() {
    return (
        <Container>

          <Header style={styles.header}>
            <Button onPress={this.props.onBack} transparent>
              <Icon style={styles.iconcolor} name='ios-arrow-back' />
            </Button>
            
            <Title style={styles.titletext}>Routineapp</Title>
            
            <Button transparent>
              <Icon style={styles.iconcolor} name='ios-menu' />
            </Button>

          </Header>
          <Content>
            <List>
              <ListItem button onPress={this.props.onForward}>
                <Text style={styles.optiontext}>option 1</Text>
              </ListItem>
              <ListItem button onPress={this.props.onBack}>
                <Text style={styles.optiontext}>option 2</Text>
              </ListItem>
            </List>
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