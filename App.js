import React, { useEffect } from 'react';
import MainStackNavigator from './navigation/MainStackNavigator'
import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
var firebaseConfig = {
  apiKey: "AIzaSyApPlCQSsdnFGtuZZW_flmKUfOyBgIeDbY",
  authDomain: "admissionmantra-b9156.firebaseapp.com",
  databaseURL: "https://admissionmantra-b9156.firebaseio.com",
  projectId: "admissionmantra-b9156",
  storageBucket: "admissionmantra-b9156.appspot.com",
  messagingSenderId: "1003978767555",
  appId: "1:1003978767555:web:6e416c58f9bd125464f676",
  measurementId: "G-314WDLCMHK"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default function App() {
  return (

    <MainStackNavigator />

  );


}
