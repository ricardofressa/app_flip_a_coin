import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  View
} from 'react-native';

const logo = require('./src/imgs/logo.png');
const imgBtnPlayer = require('./src/imgs/botao_jogar.png');
const imgAboutGame = require('./src/imgs/sobre_jogo.png');
const imgOtherGame = require('./src/imgs/outros_jogos.png');


export default class FlipACoin extends Component {
  render() {
    return (
      <View style={styles.mainSchene}>
        <View style={styles.mainGame}>
          <Image source={logo} />
          <Image source={imgBtnPlayer} />
        </View>

        <View style={styles.footer}>
          <Image source={imgAboutGame} />
          <Image source={imgOtherGame} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  mainSchene: {
    flex: 1,
    backgroundColor: '#61BD8C'
  },
  mainGame: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

AppRegistry.registerComponent('app_flip_a_coin', () => FlipACoin);
