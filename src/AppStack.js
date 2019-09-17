import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import AuthLoading from './views/AuthLoading'
import Home from './views/Home'
import Login from './views/Login'

const MainStack = createStackNavigator(
  {
    Home,
  },
  {
    initialRouteName: 'Home',
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
