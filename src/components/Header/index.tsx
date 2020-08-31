import React from "react";
import { View, Avatar } from "react-native-ui-lib";

import Search from "../Search";

interface IHeader {
  [key: string]: any
}

const Header = (props: IHeader) => {
  return(
    <View paddingH-10 paddingV-3 row centerV bg-white>
      <View padding-3 marginR-10>
        <Avatar size={25} label="U"/>
      </View>
      <Search />
    </View>
  )
}  

export default Header