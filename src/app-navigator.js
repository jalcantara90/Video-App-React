import React from 'react';
import { 
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import {
  Platform
} from 'react-native';

import Home from './screens/containers/home';
import Movie from './screens/containers/movie';
import Category from './screens/containers/category';
import Header from './sections/components/header';
import About from './screens/containers/about';
import Profile from './screens/containers/profile';
import Lucky from './screens/containers/lucky';
import Icon from './icons/components/icon';

const Main = createStackNavigator(
  {
    Home: Home,
    Movie: Movie,
    Category
  },
  {
    navigationOptions: {
      header: Header
    }
  }
)

const homeIcon = Platform.select({
  ios: 'ios-home',
  android: 'md-home',
});

const AboutIcon = Platform.select({
  ios: 'ios-alert',
  android: 'md-alert',
});

const LuckyIcon = Platform.select({
  ios: 'logo-usd',
  android: 'logo-usd',
});

const ProfileIcon = Platform.select({
  ios: 'ios-contact',
  android: 'md-contact',
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: {
        title: 'INICIO',
        tabBarIcon: <Icon iconName={homeIcon}/>
      }
    },
    About: {
      screen: About,
    },
    Lucky: {
      screen: Lucky,
      navigationOptions: {
        title: 'LUCKY',
        tabBarIcon: <Icon iconName={LuckyIcon}/>
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'PROFILE',
        tabBarIcon: <Icon iconName={ProfileIcon}/>
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#65a721',
      inactiveTintColor: 'black'
    }
  }
)

export default TabNavigator;