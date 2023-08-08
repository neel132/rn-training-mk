import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	value: 0,
}

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state, action) => {
			state.value = state.value + action.payload;
		},
		decrement: (state) => {
			state.value = state.value - 1;
		}
	}
});
const counterReducer = counterSlice.reducer;
const {increment, decrement} = counterSlice.actions;
export {
	counterReducer,
	increment,
	decrement,
};