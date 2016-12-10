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

// import CurrentRoutine from './androidjs/CurrentRoutine.android.js'
import CurrentRoutine from './CurrentRoutine.android.js'

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
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Routine', index: 0 }}
        renderScene={(route, navigator) =>
          <CurrentRoutine
            title={route.title}

            // Function to call when a new scene should be displayed
            onForward={() => {    
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    )
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
  container: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  centertext: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
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
