import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";


// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';


import {persistedReducer} from './root.reducer.js';
const sagaMiddleware= createSagaMiddleware();


const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV==='development') {
    middlewares.push(logger);
    middlewares.push(thunk)
}

export const store = createStore(persistedReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store)