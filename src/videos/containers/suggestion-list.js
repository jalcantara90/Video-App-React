import React, { Component } from 'react';

import { 
  FlatList
 } from 'react-native';
import Layout from '../components/suggestiom-list-layout';
import Empty from '../components/empty';
import Separator from '../../sections/components/vertical-separator';
import Suggestion from '../components/suggestion';

import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';

function mapStateToProps (state) {
  return {
    list: state.videos.suggestionList
  }
}

class SuggestionList extends Component {
  renderEmpty = ({item}) => <Empty text="No hay sugerencias :(" />

  itemSeparator = ({item}) => <Separator />

  renderItem = ({item}) => {
    return (
      <Suggestion 
        {...item}
        onPress={() => {this.viewMovie(item)}}
      />
    )
  }
  keyExtractor = (item) => item.id.toString();

  viewMovie = (item) => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: item
      }
    })

    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'Movie'
      })
    )
  }
  
  render() {
    return (
      <Layout 
        title="Sugerencias para ti"
        >
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent = {this.renderEmpty}
          ItemSeparatorComponent = {this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    )
  }
}

export default connect(mapStateToProps)(SuggestionList);