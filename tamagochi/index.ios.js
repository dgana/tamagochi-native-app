/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { AppRegistry, View, Navigator } from 'react-native'

import Intro from './components/intro'
import Main from './components/main'
import Lose from './components/lose'
import Win from './components/win'

export default class tamagochi extends Component {
  constructor(){
    super()
  }

  goToMain(navigator) {
    navigator.push({
      name: 'main'
    });
  }

  goToLose(navigator) {
    navigator.push({
      name: 'lose'
    });
  }

  goToWin(navigator) {
    navigator.push({
      name: 'win'
    });
  }

  render() {
    return (
      <Navigator
         initialRoute={{ name: 'intro', index: 0 }}
         renderScene={(route, navigator) => {
           switch(route.name) {
              case 'main': return <Main navigator={navigator} goToLose={() => this.goToLose(navigator)} goToWin={() => this.goToWin(navigator)}/>
              case 'lose': return <Lose navigator={navigator} />
              case 'win': return <Win navigator={navigator} />
             default: return <Intro navigator={navigator} goToMain={() => this.goToMain(navigator)}/>
           }
         }}
       />
    );
  }
}

// case 'intro': return <Intro navigator={navigator} goToMain={() => this.goToMain(navigator)}/>

AppRegistry.registerComponent('tamagochi', () => tamagochi);
