import React from "react";
import CounterButton from "../../components/CounterButton/CounterButton";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../redux/reducers/counterReducer";

const Counter = () => {
	const {value} = useSelector(state => state.counterReducer);
	const dispatch = useDispatch();
	return (
		<CounterButton
			counterValue={value}
			onIncrement={() => dispatch(increment(2))}
		/>
	)
}
export default Counter;