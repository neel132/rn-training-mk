import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./CounterButton.style";

const CounterButton = (props) => {
	const { counterValue, onIncrement } = props;
	console.log("Counter value", counterValue);
	if (counterValue % 2 === 0) {
		return (
			<View style={styles.container}>
				<Text style={styles.counterText}>Counter: {counterValue}</Text>
				<Text>This is an even number</Text>
				<TouchableOpacity onPress={onIncrement} style={{}}>
					<Text style={{ fontSize: 24, }}>Increment Counter</Text>
				</TouchableOpacity>
			</View>
		)
	} else {
		return (
			<View style={styles.container}>
				<Text style={styles.counterText}>Counter: {counterValue}</Text>
				<Text>This is a odd number</Text>
				<TouchableOpacity onPress={onIncrement}>
					<Text style={{ fontSize: 24, }}>Increment Counter</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
export default CounterButton;