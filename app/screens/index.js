import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import AboutScreen from './AboutScreen';
import SourcesScreen from './SourcesScreen';

import colors from '../constants/colors';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerBackTitle: 'Back'
      }
    },
    Detail: { screen: DetailScreen },
    About: { screen: AboutScreen },
    Sources: { screen: SourcesScreen }
  },
  {
    initialRouteName: 'Sources',
    defaultNavigationOptions: {
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
  }
);

const App = createAppContainer(MainNavigator);

export default App;
