import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

import DeliveryDetails from '~/pages/Delivery/Details';
import NewProblem from '~/pages/Delivery/NewProblem';
import ShowProblems from '~/pages/Delivery/ShowProblems';
import ConfirmDelivery from '~/pages/Delivery/ConfirmDelivery';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard: {
              screen: createStackNavigator(
                {
                  Dashboard,
                  DeliveryDetails,
                  NewProblem,
                  ShowProblems,
                  ConfirmDelivery,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                },
              ),
              navigationOptions: {
                tabBarVisible: true,
                tabBarLabel: 'Entregas',
                tabBarIcon: ({tintColor}) => (
                  <Icon name="reorder" size={20} color={tintColor} />
                ),
              },
            },
            Profile,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#7D40E7',
              inactiveTintColor: '#999999',
              style: {
                backgroundColor: '#fff',
              },
            },
          },
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      },
    ),
  );
