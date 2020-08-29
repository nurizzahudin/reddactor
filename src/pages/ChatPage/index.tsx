import React from "react";
import { View, Text, Button } from "react-native";

interface IChatPage {
  [key: string]: any;
}

const ChatPage = (props: IChatPage) => {
  return (
    <View>
      <Text>Detail Page</Text>
    </View>
  )
}

export default ChatPage;