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


//-----------------------Drawer navigation Bar ---------------------------------------

const Mdn = createDrawerNavigator({
  listTimeTable:{screen:ListTimeTable},
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
   profile: Mdn,
  // navigateRoute:{screen:NavigateRouteInput},
  // navigateMaps:{screen:NavRouteMaps},
  // filter : { screen : filterScreen },
  },
  {
  defaultNavigationOptions: ({navigation}) => {
    return {
      headerLeft:(
        <FontAwesome5 name={"bars"} brand style={{paddingLeft:15 , fontSize: 30, color:'white'}} onPress={() => navigation.toggleDrawer()}/>
      ),
      title:("Student Page"),
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize:30,
        paddingLeft:60,
        color: "white",
        
        alignSelf: 'center',
      },
      headerStyle: {
        borderBottomColor:"white",
        borderBottomWidth:1,
        backgroundColor: "#0051a3"
      }
    };
  }
});

export default createAppContainer(AppNavigator);