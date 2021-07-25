import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducers/index";
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga);