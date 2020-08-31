import React from "react";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from "./Home";
import Popular from "./Popular";
import { Dimensions } from "react-native";

const Tab = createMaterialTopTabNavigator();

interface IHomePage {
  [key: string]: any;
}

const HomePage = (props: IHomePage) => {
  return (
    <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            fontWeight: "600", 
            fontSize: 13,
            textTransform: "capitalize",
            lineHeight: 35,
            textAlignVertical: "center",
            padding: 0,
          },
          tabStyle: { 
            width: 75,
            height: 35,
            paddingTop: 0,
          },
          contentContainerStyle: {
            justifyContent: "center",
            height: 35,
          },
          indicatorContainerStyle: {
            left: "50%",
            transform: [
              {translateX: Dimensions.get("window").width * -0.209} // [TODO] center hack, need to test on different resolution
            ]
          }
        }}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Popular" component={Popular}/>
    </Tab.Navigator>
  )
}

export default HomePage;