import 'react-native-gesture-handler';
import React, { Component, useEffect } from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import Login from './src/Auth/login/index'
import Welcome from './src/Auth/welcome/index'
import Dashboard from './src/dashboard/index'
import AuthLoading from './const/authLoading/index'
import { Provider } from 'react-redux';
import store from './src/redux/store/index'
const NavStack = createStackNavigator({

  Welcome: {
    screen: Welcome,
    navigationOptions: {
      headerShown: false
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false
    }
  },
});
const SecuredNavStack = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      headerShown: false,
    },
  },
});
let Navigations = createAppContainer(createSwitchNavigator(

  {
    AuthLoading: AuthLoading,
    App: NavStack,
    Auth: SecuredNavStack,
  },
  {
    initialRouteName: 'AuthLoading',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  })
);
const App = () =>
  <Provider store={store}>
    <Navigations />
  </Provider>

export default App


