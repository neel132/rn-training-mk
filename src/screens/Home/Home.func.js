import React, { useEffect, useState } from "react";
import CounterButton from "../../components/CounterButton/CounterButton";
import CustomList from "../../components/CustomList";
import CustomImage from "../../components/CustomImage";
import { Button, View } from "react-native";
import CustomDropDownPicker from "../../components/CustomDropDownPicker";

// Basic structure of the functional components
const Home = (props) => {
	const {navigation} = props;
	const [counter, setCounter] = useState(1);
	// useEffect executes after returning of UI
	useEffect(() => {
		console.log("useEffect hook called");
	});
	console.log(`returning the functional
	component`);
	// First it will return UI
	const incrementCounter = () => {
		console.log("Incrementing counter");
		setCounter(counter + 1);
	}
	const navigateToListScreen = () => {
		navigation.navigate("List", {});
	}
	return (
		// <CustomList data={DATA} />
		// <CustomImage />
		<View style={{flex: 1, borderWidth: 1,}}>
			<CustomDropDownPicker />
			{/* <CounterButton counterValue={counter} onIncrement={incrementCounter} /> */}
			<Button title="See List" onPress={navigateToListScreen}/>
		</View>
	)
}

export default Home;

/* 
Flexbox - 0 - 1

*/
