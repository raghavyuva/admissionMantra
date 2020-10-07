import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Top from './Top';
import MarqueeText from 'react-native-marquee';

const Paper = ({ navigation, route }) => {
    const { thread } = route.params;
    const [data, setData] = useState('');
    const [notify, setNotify] = useState('');
    const { threadname } = route.params;
    const renderer = ({ item, index }) => {
        if (item.id != null) {
            return (
                <View style={{
                    marginTop: 10, width: 150, height: 150, backgroundColor: "purple", borderRadius: 20, margin: 15, marginBottom: 5,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.37,
                    shadowRadius: 3.49,

                    elevation: 5,
                }}>

                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: '800', fontSize: 22 }}>Mock Test</Text>
                    <Text style={{ color: 'white', fontWeight: '800', fontSize: 22 }}>Paper !</Text>


                    <View style={{ borderBottomColor: '#fff', borderBottomWidth: 1, borderWidth: 1, margin: 15 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Pdf', { thread: item.id, })}>
                            <Text style={{ textAlign: 'center', color: '#fff', fontWeight: '800', fontSize: 24 }}>{item.name}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        } else {
            return (
                <Text style={{ textAlign: 'center', color: 'red', fontWeight: '800', fontSize: 22, justifyContent: 'center' }}>Nothing Here!</Text>
            )
        }

    }
    useEffect(() => {
        const Listener = fetch(`http://helixsmartlabs.in/app/dashboard/papers.php?tno=${thread}`)
            .then((response) => response.json())
            .then((responseJson) => {
                setData(responseJson);
                console.log(data);
            }).catch((error) => {
                console.log("Data fetching failed");
            });
        const anotherlistener = fetch(`http://helixsmartlabs.in/app/dashboard/notice.php`)
            .then((response) => response.json())
            .then((responseJson) => {
                setNotify(...responseJson)
            })
    }, []);
    return (
        <View style={styles.main}>
            <View style={styles.nav}>
                <View style={styles.user}>
                    <Text style={styles.usrTxt}> {threadname} </Text>
                </View>
                <View style={styles.rightNotification}>
                    <Image
                        source={require('../assets/notification.png')}
                        style={styles.notification}
                    />
                </View>
            </View>
            <MarqueeText
                style={{ fontSize: 18,color:'red' }}
                duration={5000}
                marqueeOnStart
                loop
                marqueeDelay={1000}
                marqueeResetDelay={1000}
            >
                {notify.sno}:{notify.content}
            </MarqueeText>
            <View style={styles.banner}>
                <Image
                    source={require('../assets/banner.png')}
                    style={styles.logo}
                />
            </View>
            <View style={styles.body}>
                <Text style={styles.txt1}>Choose Papers</Text>

                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={renderer}
                    numColumns={2}
                />
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