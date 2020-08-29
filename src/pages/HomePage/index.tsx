import React from "react";
import { View, Text, Button } from "react-native"; 

interface IHomePage {
  [key: string]: any;
}

const HomePage = (props: IHomePage) => {
  return (
    <View>
      <Text>Home Page</Text>
    </View>
  )
}

export default HomePage;