import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomePage from "./HomePage";
import CategoryPage from "./CategoryPage";
import ChatPage from "./ChatPage";
import NotificationPage from "./NotificationPage";

const Tab = createBottomTabNavigator();

export const Types = {
  HomePage: "Home",
  CategoryPage: "Category",
  ChatPage: "Chat",
  NotificationPage: "Notification",
}

const Navigator = () => {
  return (
    <Tab.Navigator 
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
      <Tab.Screen name={Types.HomePage} component={HomePage}/>
      <Tab.Screen name={Types.CategoryPage} component={CategoryPage}/>
      <Tab.Screen name={Types.ChatPage} component={ChatPage}/>
      <Tab.Screen name={Types.NotificationPage} component={NotificationPage}/>
    </Tab.Navigator>
  )
}

export default Navigator;