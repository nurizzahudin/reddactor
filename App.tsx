/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import Header from "./src/components/Header";
import PageNavigator from "./src/pages";

const App:React.ReactNode = () => {
  return (
    <>
    <Header/>
    <NavigationContainer>
      <PageNavigator/>
    </NavigationContainer>
    </>
  );
};

export default App;