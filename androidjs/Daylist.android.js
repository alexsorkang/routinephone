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

import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, List, ListItem, Tabs} from 'native-base';

// import CurrentRoutine from './CurrentRoutine.android.js'
import Progress from './Progress.android.js'
import PublicRoutines from './PublicRoutines.android.js'
import Exerciselist from './Exerciselist.android.js'
import Newroutine from './Newroutine.android.js'
import Theme from '../Themes/customtheme.js'

export default class Daylist extends Component {
  render() {
    return (
      <Navigator
        renderScene={this.renderScene.bind(this)}
        />
    )
  }
  renderScene(route, navigator) {
    var stronglift = {name:'stronglift 5x5',description:'test text',shared:true, routine:{'split':2, 'list':[[['bench', 5,5],['rows', 3,8]],[['rest',0,0]],[['rest',0,0]],[['ohp',5,5],['deadlift',1,5]]]},difficulty:'novice'}
    return (
      <Container theme={Theme}>
        <Header style={styles.header}>

          
          <Title style={styles.titletext}>Routineapp</Title>
          
          <Button transparent>
            <Icon style={styles.iconcolor} name='ios-menu' />
          </Button>

        </Header>
        <Content style={styles.contentcolor}>
          <List dataArray = {stronglift.routine['list']} renderRow={(exercise) => 
            <ListItem button onPress={this.onForward.bind(this)}>
              <Text style={styles.optiontext}> dayone {exercise[0][0]} </Text>
            </ListItem>
            }>
          </List>
        </Content>
        <Footer>
          <FooterTab style={styles.header}>
            <Button active>
                Current
                <Icon name='md-flash'/>
            </Button>
            <Button onPress={this.onProgress.bind(this)}>
                Progress
                <Icon name='ios-trending-up'/>
            </Button>
            <Button onPress={this.onPublic.bind(this)}>
                Public
                <Icon name='ios-copy-outline'/>
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
  onForward() {
    this.props.navigator.push({
      id: 'exerciselist',
      index: 1,
    })
  }
  onProgress() {
    this.props.navigator.push({
      id: 'progress',
      index: 1,
    })
  }
  onPublic() {
    this.props.navigator.push({
      id: 'public',
      index: 1,
    })
  }
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
    backgroundColor: '#4A4A4A'
    // backgroundColor: '#DBDDDE'
  },
  contentcolor: {
    backgroundColor: '#2B2B2B'
  },
  iconcolor: {
    color: 'white'
  },
  titletext: {
    color: 'white'
  },
  optiontext: {
    // padding: 10,
    // fontSize: 20,
    color: 'white',
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