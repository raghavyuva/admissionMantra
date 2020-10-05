import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Top from './Top';
import PDFReader from 'rn-pdf-reader-js'

const Exam = () => {
    const [data, setData] = useState('');
    return (
        <PDFReader
        source={{
          uri: `http://helixsmartlabs.in/app/dashboard/files/notice/pdf0.pdf`
        }}
      />
       
    )
}
export default Exam;
const styles = StyleSheet.create({
  
});
