/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { withNavigation } from 'react-navigation';

import Divider from '../Divider';

import colors from '../../constants/colors';
import styles from './styles';

class Article extends Component {
  static propTypes = {
    news: PropTypes.object.isRequired
  };

  render() {
    const { news } = this.props;
    return (
      <TouchableHighlight
        onPress={() => {
          this.props.navigation.navigate('Detail', { newsDetail: news });
        }}
        style={styles.container}
        underlayColor={colors.WHITE}
        activeOpacity={0.3}
      >
        <View>
          <View style={styles.header}>
            <Text style={styles.title}>
              {news.title.slice(0, 40)}
              ...
            </Text>
          </View>

          <View style={styles.body}>
            <Divider />
            <Image
              resizeMode='cover'
              source={{ uri: news.urlToImage }}
              style={styles.imageArticle}
            />
            <View style={styles.textArticle}>
              <Text style={styles.description}>{news.description}</Text>
            </View>
          </View>
          <Divider />
          <View style={styles.footer}>
            <Text style={styles.publishedAt}>
              {Moment(news.publishedAt).format('LLL')}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default withNavigation(Article);
