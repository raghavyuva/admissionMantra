import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import { AsyncStorage, ActivityIndicator } from 'react-native';
LogBox.ignoreAllLogs(true);
console.clear(true);
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import MainStackNavigator from './navigation/MainStackNavigator'
export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [tokenmail, setTokenmail] = useState('');
  const [data, setData] = useState('');
  useEffect(() => {
    let isMounted = true;
    registerForPushNotificationsAsync();
    return () => { isMounted = false };
  }, [])
  const registerForPushNotificationsAsync = async () => {
    let token;
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = await Notifications.getExpoPushTokenAsync()
    setExpoPushToken(token)
    fetch(`http://helixsmartlabs.in/app/dashboard/inserttoken.php?tkn=${token.data}`,
      {
        method: "GET",
      })
  }
  return (
    <MainStackNavigator />

  );


}

