import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import Moment from 'moment';

import Divider from '../Divider';

import styles from './styles';

const Article = ({ news }) => (
  <View style={styles.container}>
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
);

Article.propTypes = {
  news: PropTypes.object.isRequired
};

export default Article;
