import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import AboutScreen from './AboutScreen';

import colors from '../constants/colors';

const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Free News',
      headerStyle: {
        backgroundColor: colors.TEAL
      },
      headerTitleStyle: {
        fontFamily: 'vincHand',
        fontSize: 37,
        color: '#fff'
      },
      headerBackTitle: 'Back'
    }
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      title: 'Free News',
      headerStyle: {
        backgroundColor: colors.TEAL
      },
      headerTitleStyle: {
        fontFamily: 'vincHand',
        fontSize: 37,
        color: '#fff'
      },
      headerTintColor: '#fff'
    }
  },
  About: { screen: AboutScreen }
});

const App = createAppContainer(MainNavigator);

export default App;
