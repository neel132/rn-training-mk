import React, { useEffect } from "react";
import CounterButton from "../../components/CounterButton/CounterButton";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../redux/reducers/counterReducer";
import {PermissionsAndroid} from 'react-native';
const Counter = () => {
	const {value} = useSelector(state => state.counterReducer);
	const dispatch = useDispatch();
	useEffect(() => {
		PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
	}, [])
	return (
		<CounterButton
			counterValue={value}
			onIncrement={() => dispatch(increment(2))}
		/>
	)
}
export default Counter;