import { createStore, applyMiddleware, 
    // compose 
} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";

import createSagaMiddleware from 'redux-saga';


import {persistedReducer} from './root.reducer.js';
const sagaMiddleware= createSagaMiddleware();

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
// const enhancers = composeEnhancers(applyMiddleware);


const middlewares = [sagaMiddleware];
middlewares.push(logger);
middlewares.push(thunk)

// if (process.env.NODE_ENV==='development') {
//     middlewares.push(logger);
// }

export const store = createStore(persistedReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store)