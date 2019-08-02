import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 10
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContent: {
    width: '95%',
    height: 200
  },
  textContent: {
    flex: 1,
    textAlign: 'justify'
  },
  footer: {
    marginBottom: 40
  }
});
