import { call, put, takeLatest } from 'redux-saga/effects';
import {
	fetchOrdersPending,
	fetchOrdersFulfilled,
	fetchOrdersRejected,
} from '../slices/summarySlice';
import { getSummaryData } from '../api';
import { User } from '../types/OrderTypes';

function* fetchOrdersSaga(): Generator<unknown, void, User> {
	try {
		yield put(fetchOrdersPending());
		const data: User = yield call(getSummaryData);
		yield put(fetchOrdersFulfilled(data));
	} catch (error: unknown) {
		if (error instanceof Error) {
			yield put(fetchOrdersRejected(error.message));
		} else {
			yield put(fetchOrdersRejected('An unexpected error occurred.'));
		}
	}
}

export default function* summarySaga() {
	yield takeLatest('summary/fetchSummary', fetchOrdersSaga);
}
