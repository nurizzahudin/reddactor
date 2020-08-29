import React from "react";
import { View, Text, Button } from "react-native"; 

interface INotificationPage {
  [key: string]: any;
}

const NotificationPage = (props: INotificationPage) => {
  return (
    <View>
      <Text>Notification Page</Text>
    </View>
  )
}

export default NotificationPage;