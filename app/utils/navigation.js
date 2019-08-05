import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import AboutScreen from '../screens/AboutScreen';
import SourcesScreen from '../screens/SourcesScreen';

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

const Navigation = createAppContainer(MainNavigator);

export default Navigation;
