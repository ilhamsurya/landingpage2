import { createAppContainer } from 'react-navigation';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation-stack';
import { Home, UmrahPromo, Umrah, UmrahDetail, Account } from '../../containers/pages';

const HomeStack = createStackNavigator(
  {
    Home,
    UmrahPromo,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home'
  },
)

const UmrahStack = createStackNavigator(
  {
    Umrah,
    UmrahDetail,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Umrah'
  },
)

const AccountStack = createStackNavigator(
  {
    Account
  },
  {
    headerMode: 'none',
    initialRouteName: 'Account'
  },
)

const Router = createStackNavigator(
  {
    HomeStack,
    UmrahStack,
    AccountStack
  },
  {
    headerMode: 'none',
    initialRouteName: 'HomeStack'
  }
);

export default createAppContainer(Router);
