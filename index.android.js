import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Routers from './src/Routers';


export default class FlipACoin extends Component {
  render() {
    return (
      <Routers />
    );
  }
}

AppRegistry.registerComponent('app_flip_a_coin', () => FlipACoin);
