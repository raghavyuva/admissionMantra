import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './screen/Main';
import Login from './screen/Login';
import Course from './screen/Course';
import Councelling from './screen/Councelling';
import { Provider } from "react-redux";
console.disableYellowBox = true;
import MainStackNavigator from './navigation/MainStackNavigator'
export default function App() {
  return (
    
      <MainStackNavigator />
     
  );


}
