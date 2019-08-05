import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { getAllNewsSource } from '../../api/News';

class Sources extends Component {
  componentDidMount() {
    getAllNewsSource({
      country: '',
      language: '',
      category: ''
    }).then(data => console.log(data));
  }
  render() {
    return (
      <View>
        <Text>Sources</Text>
      </View>
    );
  }
}

export default Sources;
