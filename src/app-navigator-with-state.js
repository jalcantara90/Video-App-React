import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppNavigator from './app-navigator';

import { 
  reduxifyNavigator
} from 'react-navigation-redux-helpers';

const ReduxifyApp = reduxifyNavigator(AppNavigator, 'root'); //el parámetro que se le pasa es el mismo definido en el store como nombre del middleware

class AppNavigatorWithState extends ReduxifyApp {

}

const mapStateToProps = state => {
  return {
    state: state.navigation
  }
}

export default connect(mapStateToProps)(AppNavigatorWithState);