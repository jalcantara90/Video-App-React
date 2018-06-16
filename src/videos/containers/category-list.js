import React, { Component } from 'react';
import {
  View,
  FlatList
} from 'react-native';

import Category from '../components/category';
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';
import Layout from '../components/categories-list-layout';
class CategoryList extends Component {
  keyExtractor = item => item.id.toString();
  itemSeparator = () => <Separator />
  renderEmpty = () => <Empty text="No hay categorias :("/>
  renderItem = ({item}) => {
    return (
      <Category {...item}/>
    )
  }
  render() {
    return (
      <Layout 
        title="Categorias"
      >
        <FlatList
            horizontal
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

export default CategoryList