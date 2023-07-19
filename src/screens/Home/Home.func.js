import React, { useEffect, useState } from "react";
import CounterButton from "../../components/CounterButton";
import CustomList from "../../components/CustomList";
import CustomImage from "../../components/CustomImage";
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
// Basic structure of the functional components
const Home = () => {
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
	return (
		// <CustomList data={DATA} />
		<CustomImage />
		// <CounterButton counterValue={counter} onIncrement={incrementCounter} />
	)
}

export default Home;