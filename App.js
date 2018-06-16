/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Header>
          
        </Header>
        <Text>header</Text>
        <Text>Buscador</Text>
        <Text>Categorías</Text>
        <Text>Sugerencias</Text>
      </Home>
    );
  }
}
