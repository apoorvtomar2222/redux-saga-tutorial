import {createStore, applyMiddleware, compose} from 'redux';
import reducers  from './reducer';
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;

// mount it on the Store
export const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

// then run the saga
sagaMiddleware.run(mySaga)
