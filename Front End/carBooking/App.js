/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Button, Item, Input, Icon } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createStackNavigator, createAppContainer,  createDrawerNavigator, createSwitchNavigator ,createBottomTabNavigator } from "react-navigation";

import Login from './components/Login';
import LoginStudent from './components/LoginStudent';
import LoginDriver from './components/LoginDriver';

import SideBar from './components/SideBar';
import ListTimeTable from './components/ListTimeTable';
import DriverDummy from './components/DriverDummy';   //rename ur calss and folder path
import DriverDummyNew from './components/DriverDummyNew'; //rename ur calss and folder path
import PastRides from './components/PastRides';
import DriverProfile from './components/DriverProfile';

//-----------------------Drawer navigation Bar ---------------------------------------

const Mdn = createDrawerNavigator({
  listTimeTable:{screen:ListTimeTable},
  driverdummy:{screen:DriverDummy}, 
  pastRides:{screen:PastRides}
},
{
  contentComponent: SideBar,
},
)

// const Mdn = createDrawerNavigator({
//   listTimeTable:{screen:ListTimeTable},
// },
// {
//   contentComponent: SideBar,
// },
// )

//-----------------------Main App navigation ---------------------------------------


const AppNavigator = createStackNavigator({
  login: { screen: Login }, 
  studentLogin :{screen:LoginStudent},
  driverLogin:{screen:LoginDriver},
  driverdummy:{screen:DriverDummy},             //rename  screen to ur calssName and put dhang ka label instead of driverdummy
  driverdummynew:{screen:DriverDummyNew},       //rename  screen to ur calssName and put dhang ka label instead of driverdummynew
  pastRides:{screen:PastRides},
  DriverProfile : { screen : DriverProfile } ,
   profile: Mdn
  });

export default createAppContainer(AppNavigator);