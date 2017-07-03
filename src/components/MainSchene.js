import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight
} from 'react-native';
import Actions from 'react-native-router-flux';

const logo = require('../imgs/logo.png');
const imgBtnPlayer = require('../imgs/botao_jogar.png');
const imgAboutGame = require('../imgs/sobre_jogo.png');
const imgOtherGame = require('../imgs/outros_jogos.png');


export default class MainSchene extends Component {
  render() {
    return (
      <View style={styles.mainSchene}>
        <View style={styles.mainGame}>
          <Image source={logo} />
          <TouchableHighlight
            onPress={() => { Actions.result(); }}
          >
            <Image source={imgBtnPlayer} />
          </TouchableHighlight>
        </View>

        <View style={styles.footer}>
        <TouchableHighlight 
          onPress={() => { Actions.aboutgame(); }} 
        >
          <Image source={imgAboutGame} />
        </TouchableHighlight>
        
        <TouchableHighlight
          onPress={() => { Actions.othergame(); }}
        >
          <Image source={imgOtherGame} />
        </TouchableHighlight>
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
