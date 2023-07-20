// Example for class component
import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import CounterButton from '../../components/CounterButton/CounterButton';

// State - State is mutable
// Props - Props is immutable

// Basic structure of the class component
class Home extends Component {
	constructor() {
		super();
		console.log("Class constructor called...");
		this.state = {
			counterValue: 1,
		}
	}
	render() {
		console.log("Render method called...");
		const {counterValue} = this.state;
		return (
			<CounterButton
				counterValue={counterValue}
				onIncrement={() => this.setState({counterValue : counterValue + 1})}
			/>
		)
	}
	componentDidMount() {
		console.log("Component didMount called");
	}
	componentWillUnmount() {
		console.log("Component will unmount called");
	}
}

export default Home;