import React from "react";
import { View, Text, Button } from "react-native"; 

interface IHome {
  [key: string]: any;
}

const Home = (props: IHome) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home;