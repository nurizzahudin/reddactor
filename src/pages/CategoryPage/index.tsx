import React from "react";
import { View, Text, Button } from "react-native"; 

interface ICategoryPage {
  [key: string]: any;
}

const CategoryPage = (props: ICategoryPage) => {
  return (
    <View>
      <Text>Category Page</Text>
    </View>
  )
}

export default CategoryPage;