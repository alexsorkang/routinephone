import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';

export default class CurrentRoutine extends Component {
  render() {
    return (
      <View>
        <Container> 
          <Header>
            <Title>Header</Title>
          </Header>
          <Content>
            this one
          </Content>

          <Footer>
            <FooterTab>
                <Button transparent>
                    <Icon name='ios-call' />
                </Button>  
            </FooterTab>
          </Footer>
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
    borderBottomWidth: 1,
    borderColor: 'gray',
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