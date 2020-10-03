import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Top from './Top';

const Councelling = props => {
    const { navigation } = props
    return (
        <View>
            <View style={styles.nav}>
                <View style={styles.user}>
                    <Text style={styles.usrTxt}>Hello Dhruv</Text>
                </View>
                <View style={styles.rightNotification}>
                    <Image
                        source={require('../assets/notification.png')}
                        style={styles.notification}
                    />
                </View>
            </View>
            <View></View>
            <View></View>
        </View>
    );
}

const styles = StyleSheet.create({
    nav: { marginTop: 30, flexDirection: "row", justifyContent: "space-between", marginLeft: 10, marginRight: 10 },
    user: {},
    usrTxt: { fontSize: 28 },
    notification: { width: 24, height: 24, padding: 10 },
    rightNotification: {
        width: 34, height: 34,alignItems: "center", justifyContent: "center", shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    }
});

export default Councelling