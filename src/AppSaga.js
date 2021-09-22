import React from 'react';

import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'

import reducers from './Redux-TEST/reducers/index';
import Test from './Redux-Saga/components/Test'
import { helloSaga } from './Redux-Saga/components/Saga'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(helloSaga)

const action = type => store.dispatch({type})

function AppSaga() {
    return (
        <Test action={action}/>
    );
}

export default AppSaga;
