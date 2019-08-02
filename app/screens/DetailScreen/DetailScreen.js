/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { ScrollView, View, Text, Image, Linking } from 'react-native';
import Moment from 'moment';

import Divider from '../../components/Divider';

import colors from '../../constants/colors';

import styles from './styles';

class DetailScreen extends Component {
  render() {
    const news = this.props.navigation.getParam('newsDetail', null);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{news.title}</Text>
        <ScrollView contentContainerStyle={styles.content}>
          <Image
            resizeMode='contain'
            source={{ uri: news.urlToImage }}
            style={styles.imageContent}
          />
          <View style={styles.textContent}>
            <Text style={styles.textContent}>{news.content}</Text>
          </View>
        </ScrollView>
        <Divider />
        <View style={styles.footer}>
          <ScrollView horizontal contentContainerStyle={{ height: 40 }}>
            <Text>
              @{news.author} / {Moment(news.publishedAt).format('LLL')} /{' '}
            </Text>
            <Text
              onPress={() =>
                Linking.openURL(news.url).catch(err =>
                  console.error('An error occurred', err)
                )
              }
              style={{ color: colors.BLUE }}
            >
              Read in source
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default DetailScreen;
