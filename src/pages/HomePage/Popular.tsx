import React from "react";
import { View, Text, Button } from "react-native"; 

interface IPopular {
  [key: string]: any;
}

const Popular = (props: IPopular) => {
  return (
    <View>
      <Text>Popular</Text>
    </View>
  )
}

export default Popular;