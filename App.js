/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import Loading from './src/sections/components/loading';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import AppNavigatorWithState from './src/app-navigator-with-state';
type Props = {};
export default class App extends Component<Props> {
  state = {
    // suggestionList: [],
    // categoryList: []
  }

  render() {
    console.disableYellowBox = true;

    return (
      <Provider 
        store={store}
      >
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
          <AppNavigatorWithState />
        </PersistGate>
      </Provider>
    );
  }
}
