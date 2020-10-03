import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Top from './Top';

const Paper = props => {
    const { navigation } = props
    return (
        <View style={styles.main}>
            <View style={styles.nav}>
                <View style={styles.user}>
                    <Text style={styles.usrTxt}>Neet UG</Text>
                </View>
                <View style={styles.rightNotification}>
                    <Image
                        source={require('../assets/notification.png')}
                        style={styles.notification}
                    />
                </View>
            </View>
            <View style={styles.banner}>
                <Image
                    source={require('../assets/banner.png')}
                    style={styles.logo}
                />
            </View>
            <View style={styles.body}>
                <Text style={styles.txt1}>Choose Papers</Text>
                <View style={{
                    marginTop:10,width: 150, height: 150, backgroundColor: "white", borderRadius: 20,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.37,
                    shadowRadius: 3.49,

                    elevation: 5,
                }}>

                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: { height: "100%", backgroundColor: "white" },
    nav: { marginTop: 26, flexDirection: "row", justifyContent: "space-between", marginLeft: 10, marginRight: 10, height: "10%", },
    logo: { width: "90%", height: "90%", borderRadius: 20, },
    banner: {
        justifyContent: "center", alignItems: "center",
        height: "25%", marginLeft: 10, marginRight: 10, borderRadius: 20, backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    usrTxt: { fontSize: 32, fontWeight: "600" },
    notification: { width: 24, height: 24, padding: 10 },
    rightNotification: {
        width: 34, height: 34, alignItems: "center", justifyContent: "center", shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    body: {
        height: "65%",
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10
    }, txt1: {
        fontSize: 24
    }, 
});

export default Paper