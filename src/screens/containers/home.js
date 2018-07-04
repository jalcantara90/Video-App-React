import React, { Component, Fragment } from 'react';

import API from '../../../utils/api';
import Header from '../../sections/components/header';
import CategoryList from '../../videos/containers/category-list';
import SuggestionList from '../../videos/containers/suggestion-list';
import Movie from '../../screens/containers/movie';
import Search from '../../sections/containers/search';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
class Home extends Component {
  static navigationOptions = () => {
    return {
      header: Header,
      title: 'inicio'
    }
  }
  async componentDidMount() {
    this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('white'); // solo afecta a android

    })

    const categoryList = await API.getMovies();
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })

    const suggestionList = await API.getSuggestion(10);
    this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
  }

  render() {
    if(this.props.selectedMovie) {
      return <Movie />
    } 
    return(
      <Fragment>
        <Search />
        <CategoryList />
        <SuggestionList />
      </Fragment>
    )
  }
}

export default connect(null)(Home);