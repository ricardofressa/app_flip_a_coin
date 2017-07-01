import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import { MainSchene } from './src/components/MainSchene.js';
import { OthersGames } from './src/components/OthersGames.js';
import { AboutGame } from './src/components/AboutGame.js';


export default class FlipACoin extends Component {
  render() {
    return (
      <Router sceneStyle={{ paddingTop: 50 }}>
        <Scene key='mainschene' component={MainSchene} title='Cara ou coroa' initil />
        <Scene key='othergame' component={OthersGames} title='Outros Games' />
        <Scene key='aboutgame' component={AboutGame} title='Sobre o Game' />
      </Router>
    );
  }
}

AppRegistry.registerComponent('app_flip_a_coin', () => FlipACoin);
