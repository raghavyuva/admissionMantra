import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Top from './Top';
import { ScrollView } from 'react-native-gesture-handler';

const Notification = () => {
    const [data, setData] = useState('');
    useEffect(() => {
        fetch('http://helixsmartlabs.in/app/dashboard/notice.php')
            .then((response) => response.json())
            .then((responseJson) => {
                setData(responseJson);

            }).catch((error) => {
                console.log("Data fetching failed", error);
            })
    }, []);
    const renderer = ({ item, index }) => {
        return (
            <View style={{ borderBottomWidth: 1, borderWidth: 1, margin: 15, marginBottom: 0, padding: 15, paddingBottom:7, borderRadius: 15 }}>

                <Text style={{ textAlign: 'left', color: 'black', fontWeight: '800', fontSize: 24 }}>{item.title}</Text>
                <View style={{marginTop:5}}>
                <Text style={{ textAlign: 'justify', color: 'black', fontWeight: '400', fontSize: 18 }}>{item.content}</Text>
                </View>
                <View style={{marginTop:10}}>
                <Text style={{ textAlign: 'right', color: 'black', fontWeight: '300', fontSize: 14 }}>{item.dop}</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={{ backgroundColor: "white" }}>
            <View style={{ height: "100%", marginTop: 30 }}>
                <View style={{flexDirection:"row"}}>
                    <View>
                        <Image
                            source={require('../assets/notification.png')}
                            style={styles.notification}
                        />
                    </View>
                    <View>
                        <Text style={{ fontSize: 30, fontWeight: "600", }}>Notices</Text>
                    </View>
                </View>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.sno}
                    renderItem={renderer}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    notification: { width: 20, height: 20, padding: 10, paddingRight: 0, marginLeft: 10,marginTop:5 },
})
export default Notification;