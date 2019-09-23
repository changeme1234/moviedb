import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import AuthLoading from './views/AuthLoading'
import BottomTabBar from './components/BottomTabBar'
import Home from './views/Home'
import Login from './views/Login'
import MovieDetail from './views/MovieDetail'
import Search from './views/Search'
import Settings from './views/Settings'
import WatchList from './views/WatchList'

const BottomTabs = createBottomTabNavigator(
  {
    Home,
    Search,
    Settings,
    WatchList,
  },
  {
    tabBarComponent: props => <BottomTabBar {...props} style={{ color: '#605F60' }} />,
  }
)

const MainStack = createStackNavigator(
  {
    BottomTabs,
    MovieDetail,
  },
  {
    initialRouteName: 'BottomTabs',
    headerMode: 'none',
  }
)

const AuthStack = createStackNavigator(
  {
    Login,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  }
)

const App = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    Main: MainStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
    headerMode: 'none',
  }
)

export default createAppContainer(App)
