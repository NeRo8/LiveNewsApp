import React, { Component } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';

import Article from '../../components/Article';

import { getBusinnesNewsFromApi } from '../../api/News';

import styles from './styles';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    getBusinnesNewsFromApi().then(data =>
      this.setState({
        dataSource: data.articles,
        isLoading: false
      })
    );
  }

  render() {
    const { isLoading, dataSource } = this.state;

    if (isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <FlatList
        data={dataSource}
        renderItem={item => <Article news={item.item} />}
        keyExtractor={item => item.id}
        style={styles.container}
      />
    );
  }
}

export default HomeScreen;
