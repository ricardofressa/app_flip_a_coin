
import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const cara = require('../imgs/moeda_cara.png');
const coroa = require('../imgs/moeda_coroa.png');

export default class Result extends Component {
	constructor(props) {
		super(props);
		
		this.state = { result: '' };
	}

	componentWillMount() {
		const randomNumber = Math.floor(Math.random() * 2);
		let flipACoin = '';

		if (randomNumber === 0) {
			flipACoin = 'cara';
		} else {
			flipACoin = coroa;
		}

		this.setState({ result: flipACoin });
	}

	render() {
		if (this.state.flipACoin === 'cara') {
			return (
			<View style={styles.result}>
				<Image source={cara} />
			</View>
			);
		} 

		return (
			<View style={styles.result}>
				<Image source={coroa} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	result: {
		flex: 1,
		backgroundColor: '#61BD8C',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
