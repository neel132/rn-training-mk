import React, { useEffect, useState } from "react";
import CounterButton from "../../components/CounterButton/CounterButton";
import CustomList from "../../components/CustomList";
import CustomImage from "../../components/CustomImage";
import { Button, View } from "react-native";

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
		<View style={{flex :1, marginBottom: 10,}}>
			<CounterButton counterValue={counter} onIncrement={incrementCounter} />
			<Button title="See List" onPress={navigateToListScreen}/>
		</View>
	)
}

export default Home;