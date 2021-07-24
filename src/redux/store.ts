import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from "./reducers/index";

// const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer);

// sagaMiddleware.run()