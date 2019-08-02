import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24
  },
  header: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    paddingLeft: 20
  },
  title: {
    fontWeight: '600'
  },
  body: {
    width: '100%',
    height: 230
  },
  imageArticle: {
    width: '100%',
    height: 100
  },
  textArticle: {
    flex: 1,
    padding: 5
  },
  description: {
    textAlign: 'justify',
    fontWeight: '400'
  },
  footer: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  publishedAt: {
    paddingRight: 10
  }
});
