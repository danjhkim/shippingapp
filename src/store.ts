import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { setupListeners } from '@reduxjs/toolkit/query';
import ordersReducer from './slices/ordersSlice';
import summaryReducer from './slices/summarySlice';
import rootSaga from './rootSaga'; // Import your rootSaga

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: {
		ordersReducer,
		summaryReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

setupListeners(store.dispatch);

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
