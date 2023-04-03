import { User } from '../types/OrderTypes';
import { OrdersState } from '../types/reduxTypes';
import { PayloadAction } from './../../node_modules/@reduxjs/toolkit/src/createAction';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	summaryData: null,
	status: null,
} as OrdersState;

const summarySlice = createSlice({
	name: 'summarySlice',
	initialState,
	reducers: {
		fetchOrdersPending: state => {
			state.status = 'pending';
			state.error = null;
		},
		fetchOrdersFulfilled: (state, action: PayloadAction<User>) => {
			state.status = 'fulfilled';
			state.summaryData = action.payload;
			state.error = null;
		},
		fetchOrdersRejected: (state, action) => {
			state.summaryData = null;
			state.status = 'rejected';
			state.error = action.payload;
		},
	},
});

export const { fetchOrdersPending, fetchOrdersFulfilled, fetchOrdersRejected } =
	summarySlice.actions;

export default summarySlice.reducer;
