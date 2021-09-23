import React from 'react';

import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'

import reducers from './Redux-Saga/reducers/index';
import rootSaga from './Redux-Saga/sagas/index';
import Test from './Redux-Saga/components/Test'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

function AppSaga() {
    return (
        <Provider store={store}>
            <Test/>
        </Provider>

    );
}

export default AppSaga;
