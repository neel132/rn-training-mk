import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const CounterButton = (props) => {
	const { counterValue, onIncrement } = props;
	console.log("Counter value", counterValue);
	if (counterValue % 2 === 0) {
		return (
			<View>
				<Text style={{ fontSize: 24, }}>Counter: {counterValue}</Text>
				<Text>This is an even number</Text>
				<TouchableOpacity onPress={onIncrement} style={{}}>
					<Text style={{ fontSize: 24, }}>Increment Counter</Text>
				</TouchableOpacity>
			</View>
		)
	} else {
		return (
			<View>
				<Text style={{ fontSize: 24, }}>Counter: {counterValue}</Text>
				<Text>This is a odd number</Text>
				<TouchableOpacity onPress={onIncrement}>
					<Text style={{ fontSize: 24, }}>Increment Counter</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
export default CounterButton;