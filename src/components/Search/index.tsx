import React from "react";
import { TextInput, StyleSheet } from "react-native";

import { View } from "react-native-ui-lib";
import Icon from "react-native-vector-icons/Feather";


interface ISearch {
  [key: string]: string;
}

const styles = StyleSheet.create({
  input: {
    fontSize: 10, 
    padding: 0, 
    paddingHorizontal: 10, 
    lineHeight: 15
  }
})

const Search = (props: ISearch) => {
  return(
    <View row bg-dark70 centerV paddingV-3 paddingH-5 br10 flexG height={27}>
      <Icon name="search" size={15} color="gray"/>
      <TextInput style={styles.input} placeholder="Search"/>
    </View>
  )
}

export default Search;