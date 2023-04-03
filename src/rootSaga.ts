import { all, fork } from 'redux-saga/effects';
import ordersSaga from './sagas/ordersSaga';
import summarySaga from './sagas/summarySaga';

export default function* rootSaga() {
	yield all([fork(ordersSaga), fork(summarySaga)]);
}
