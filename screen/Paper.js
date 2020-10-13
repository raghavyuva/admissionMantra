import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Top from './Top';
import MarqueeText from 'react-native-marquee';
import { usePreventScreenCapture } from 'expo-screen-capture';
import { ScrollView } from 'react-native-gesture-handler';
const Paper = ({ navigation, route }) => {
    usePreventScreenCapture();
    const { thread } = route.params;
    const [data, setData] = useState('');
    const [notify, setNotify] = useState('');
    const { threadname } = route.params;
    const renderer = ({ item, index }) => {
        if (item.id != null) {
            return (
                <View style={{ width: "50%", alignItems: "center" }}>
                    <LinearGradient
                        colors={['#5B86E5', '#36D1DC']}
                        style={styles.square}
                        start={[0, 0]}
                        end={[1, 1]}
                    >
                        <View style={{ padding: 10 }}>
                            <Text style={styles.mock}>Document</Text>
                            <Text style={styles.paper}>{item.dop}</Text>
                            <View style={styles.testLine} />
                            <View style={{ borderColor: '#fff', borderWidth: 1, margin: 10, marginBottom: 0 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('Pdf', { thread: item.id })} style={{ marginBottom: 5 }}>
                                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 15, paddingVertical: 5 }}>{item.name}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </LinearGradient>
                </View>
            )
        } else {
            return (
                <Text style={{ textAlign: 'center', color: 'red', fontWeight: '800', fontSize: 22, justifyContent: 'center' }}>Nothing Here!</Text>
            )
        }

    }
    useEffect(() => {
        let isMounted = true;
        const Listener = fetch(`http://helixsmartlabs.in/app/dashboard/papers.php?tno=${thread}`)
            .then((response) => response.json())
            .then((responseJson) => {
                setData(responseJson);
            }).catch((error) => {
                alert("Data fetching failed");
            });
        const anotherlistener = fetch(`http://helixsmartlabs.in/app/dashboard/marquee.php`)
            .then((response) => response.json())
            .then((responseJson) => {
                setNotify(responseJson)
            }).catch((error) => {
                alert("Data fetching failed");
            })
        return () => { isMounted = false };
    }, []);
    usePreventScreenCapture();
    return (
        <View style={styles.main}>
            <View style={styles.nav}>
                <View style={styles.user}>
                    <Text style={styles.usrTxt}> {threadname} </Text>
                </View>
                <View style={styles.rightNotification}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('another', { screen: "notify" });
                    }}>
                        <Image
                            source={require('../assets/notification.png')}
                            style={styles.notification}
                        />
                    </TouchableOpacity>
                </View>

            </View>
            <View>
            </View>
            <View style={styles.banner}>
                <Image
                    source={require('../assets/banner.png')}
                    style={styles.logo}
                />
            </View>

            <View style={styles.body}>
                <Text style={styles.mainText}>Documents</Text>
                <View >
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.tno}
                        renderItem={renderer}
                        numColumns={2}
                    />
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: { height: "100%", backgroundColor: "white", paddingBottom: 70 },
    nav: { marginTop: 26, flexDirection: "row", justifyContent: "space-between", marginLeft: 10, marginRight: 10, height: "10%", },
    logo: { width: "90%", height: "90%", borderRadius: 20, },
    banner: {
        justifyContent: "center", alignItems: "center",
        height: "25%", marginLeft: 10, marginRight: 10, marginRight: 10, borderRadius: 20, backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    usrTxt: { fontSize: 28, fontWeight: "bold" },
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

        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10,
    },
    mainText: { fontSize: 25, fontWeight: 'bold', paddingHorizontal: 10, marginTop: 10, marginBottom: 10 },
    square: { borderRadius: 10, height: "auto", width: 150, marginHorizontal: 10, marginVertical: 5 },
    mock: { fontSize: 14, fontWeight: 'bold', color: 'white' },
    paper: { fontSize: 12, color: 'white' },
    testLine: { borderWidth: 3, borderColor: 'white', marginTop: 10, width: '70%', borderRadius: 2 },
});

export default Paper