import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Top from './Top';
import { ScrollView } from 'react-native-gesture-handler';
const Councelling = ({ navigation, route }) => {
    const { thread } = route.params;
    const [data, setData] = useState('');
    const [partdata, setPartdata] = useState('');
    const { usremail } = route.params;
    const { usrpass } = route.params;
    console.log(route);

    const renderer = ({ item, index }) => {
        return (
            <View style={{ borderBottomColor: '#fff', borderBottomWidth: 1, borderWidth: 1, margin: 15 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Paper', { thread: item.tno, threadname: item.tname })}>
                    <Text style={{ textAlign: 'center', color: 'blue', fontWeight: '800', fontSize: 24 }}>{item.tname}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    useEffect(() => {
        const Listener = fetch(`http://helixsmartlabs.in/app/dashboard/tab.php?sno=${thread}`)
            .then((response) => response.json())
            .then((responseJson) => {
                setData(responseJson);
               
            }).catch((error) => {
                console.log("Data fetching failed");
            });
        const Listen = fetch(`http://helixsmartlabs.in/portfolio/app/loginapi/login.php?email=${usremail}&password=${usrpass}`)
            .then((response) => response.json())
            .then((responseJson) => {
             setPartdata(...responseJson);
             console.log(partdata);
            }).catch((error) => {
                console.log("Data fetching failed");
            });
    }, []);
    return (
        <View style={styles.main}>
            <View style={styles.nav}>
                <View style={styles.user}>
    <Text style={styles.usrTxt}>Hello {partdata.username}</Text>
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
                <Text style={styles.txt1}>Select Councelling Process</Text>

                <View style={styles.tab}>
                    <LinearGradient
                        colors={['#36D1DC', '#5B86E5']}
                        style={styles.btn1}
                        start={[0, 0]}
                        end={[1, 1]}
                    >
                        <ScrollView>
                            <FlatList
                                data={data}
                                keyExtractor={(item) => item.tno}
                                renderItem={renderer}
                            />
                        </ScrollView>
                    </LinearGradient>
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
    }, tab: {
        backgroundColor: "white",
        width: "100%",
        height: "70%",
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.37,
        shadowRadius: 3.49,

        elevation: 5,
    }, btn1: {
        width: "100%",
        height: "100%",
        borderRadius: 20
    }
});

export default Councelling