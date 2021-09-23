import React from 'react';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducers from './Redux-TEST/reducers/index';

import Test from "./Redux-TEST/components/Test";
import TestHook from "./Redux-TEST/components/Test_Hook";

const store = createStore(reducers,applyMiddleware(thunk))

function App() {
  return (
      <Provider store={store}>
          <Test/>
          <TestHook/>
      </Provider>
  );
}

export default App;
