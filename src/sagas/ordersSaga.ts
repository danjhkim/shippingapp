import { call, put, takeLatest } from 'redux-saga/effects';
import {
	fetchOrdersPending,
	fetchOrdersFulfilled,
	fetchOrdersRejected,
} from '../slices/ordersSlice';
import { getOrdersData } from '../api';
import { Orders } from '../types/OrderTypes';

function* fetchOrdersSaga(): Generator<unknown, void, Orders> {
	try {
		yield put(fetchOrdersPending());
		const data: Orders = yield call(getOrdersData);
		yield put(fetchOrdersFulfilled(data));
	} catch (error: unknown) {
		if (error instanceof Error) {
			yield put(fetchOrdersRejected(error.message));
		} else {
			yield put(fetchOrdersRejected('An unexpected error occurred.'));
		}
	}
}

export default function* ordersSaga() {
	yield takeLatest('orders/fetchOrders', fetchOrdersSaga);
}
