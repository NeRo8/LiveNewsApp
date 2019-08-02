import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import Article from '../../components/Article';

import styles from './styles';

const newsData = {
  source: {
    id: 'engadget',
    name: 'Engadget'
  },
  author: 'Chris Velazco',
  title: 'What to expect from Samsung’s Galaxy Note 10 event',
  description:
    "Few companies revel in spectacle the way that Samsung does, and if nothing else, the company's Unpacked event in will be an assault on the senses. Of course, all that spectacle serves a purpose: To get people hyped for its newest flagship smartphone, the Gala…",
  url:
    'https://www.engadget.com/2019/08/01/samsung-unpacked-galaxy-note-10-preview/',
  urlToImage:
    'https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=80&image_uri=https%3A%2F%2Fimg.vidible.tv%2Fprod%2F2019-08%2F01%2F5d422d2cb8bad32783143400%2F5d422e4005c4505c29a31bfe_o_U_v1.jpg&client=amp-blogside-v2&signature=6819e119ae7295e261fb2afc93fb561009e75fda',
  publishedAt: '2019-08-01T19:30:00Z',
  content:
    "The Galaxy Note 10 family\r\nHistorically, when Galaxy Note time rolled around, Samsung almost always focused on delivering a single device. That probably won't be the case this time, though. If persistent rumors and leaks hold true, the company could reveal as… [+1909 chars]"
};

const newsData2 = {
  source: {
    id: 'the-wall-street-journal',
    name: 'The Wall Street Journal'
  },
  author: 'Rebecca Ballhaus, Michael Rothfeld',
  title:
    'Trump Org Subpoenaed for Documents Related to Stormy Daniels Hush Payment...',
  description:
    'Manhattan state prosecutors have subpoenaed the Trump Organization for documents related to a hush payment to a former adult-film star during the 2016 election, according to a person familiar with the matter, the latest investigation to examine the company’s …',
  url:
    'https://www.wsj.com/articles/trump-organization-subpoenaed-for-documents-related-to-stormy-daniels-hush-payment-11564702374',
  urlToImage: 'https://images.wsj.net/im-95347/social',
  publishedAt: '2019-08-02T01:10:37Z',
  content:
    'Manhattan state prosecutors have subpoenaed the Trump Organization for documents related to a hush payment to a former adult-film star during the 2016 election, according to a person familiar with the matter, the latest investigation to examine the companys i… [+4498 chars]'
};

class HomeScreen extends Component {
  state = {};

  render() {
    return (
      <ScrollView style={styles.container}>
        <Article news={newsData} />
        <Article news={newsData2} />
        <Article news={newsData} />
        <Article news={newsData} />
        <Article news={newsData} />
        <Article news={newsData} />
        <Article news={newsData} />
      </ScrollView>
    );
  }
}

export default HomeScreen;
