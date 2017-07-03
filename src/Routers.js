import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import { MainSchene } from './components/MainSchene.js';
import { OthersGames } from './components/OthersGames.js';
import { AboutGame } from './components/AboutGame.js';
import { ResultSchene } from './components/Result.js';

const Routers = () => ( 
	<Router sceneStyle={{ paddingTop: 50 }}>
    <Scene key='mainschene' component={MainSchene} title='Cara ou coroa' initial />
    <Scene key='othergame' component={OthersGames} title='Outros Games' />
    <Scene key='aboutgame' component={AboutGame} title='Sobre o Game' />
    <Scene key='result' component={ResultSchene} title='Resultado' />
  </Router>
  );

export default Routers;
