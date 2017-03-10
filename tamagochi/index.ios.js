/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { AppRegistry, View, Navigator } from 'react-native'

import Intro from './components/intro'
import Main from './components/main'

export default class tamagochi extends Component {
  constructor(){
    super()
  }

  goToMain(navigator) {
    navigator.push({
      name: 'main'
    });
  }

  render() {
    return (
      <Navigator
         initialRoute={{ name: 'intro', index: 0 }}
         renderScene={(route, navigator) => {
           switch(route.name) {

             default: return <Main />
           }
         }}
       />
    );
  }
}

// case 'intro': return <Intro navigator={navigator} goToMain={() => this.goToMain(navigator)}/>

AppRegistry.registerComponent('tamagochi', () => tamagochi);
