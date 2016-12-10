import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ToolbarAndroid,
  Ionicons,
  IconList,
  IconSetList
} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import IconSetList from './IconSetList';
// import IconList from './IconList';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';

export default class CurrentRoutine extends Component {
  render() {
    return (
      <View>

        <Container>
                <Header>
                    <Button transparent>
                        <Icon name='ios-arrow-back' />
                    </Button>
                    
                    <Title>Header</Title>
                    
                    <Button transparent>
                        <Icon name='ios-menu' />
                    </Button>
                </Header>
            </Container>

        <View style={styles.container}>
          <TouchableHighlight underlayColor={'gray'} onPress={this.props.onForward}>
            <Text style={styles.optiontext}>option 1</Text>
          </TouchableHighlight>

          <TouchableHighlight underlayColor={'gray'} onPress={this.props.onBack}>
            <Text style={styles.optiontext}>option 2</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titlebar: {
    // flex: 1,
    height: 50,
    // color: 'black',
  },
  container: {
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
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