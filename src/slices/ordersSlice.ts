import { Orders } from '../types/OrderTypes';
import { OrdersState } from '../types/reduxTypes';
import { PayloadAction } from './../../node_modules/@reduxjs/toolkit/src/createAction';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	ordersData: null,
	status: null,
} as OrdersState;

const ordersSlice = createSlice({
	name: 'ordersSlice',
	initialState,
	reducers: {
		fetchOrdersPending: state => {
			state.status = 'pending';
			state.error = null;
		},
		fetchOrdersFulfilled: (state, action: PayloadAction<Orders>) => {
			state.status = 'fulfilled';
			state.ordersData = action.payload;
			state.error = null;
		},
		fetchOrdersRejected: (state, action) => {
			state.ordersData = null;
			state.status = 'rejected';
			state.error = action.payload;
		},
	},
});

export const { fetchOrdersPending, fetchOrdersFulfilled, fetchOrdersRejected } =
	ordersSlice.actions;

export default ordersSlice.reducer;
