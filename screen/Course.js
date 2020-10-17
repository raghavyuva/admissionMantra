import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
const Course = ({ navigation, route }) => {
    const [data, setData] = useState('');
    useEffect(() => {
        let isMounted = true;
       
        const Listener = fetch('http://theadmissionmantra.in/stream.php')
            .then((response) => response.json())
            .then((responseJson) => {

                setData(responseJson);
                console.log(data);
            }).catch((error) => {
                console.log("Data fetching failed");
            });
            return () => { isMounted = false };
    }, []);
   

    const renderer = ({ item, index, }) => {
        if (item.id % 2 == 0) {
            return (
                <View style={{ width: "50%", alignItems: "center" }}>
                    <ScrollView>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('another',
                                {
                                    screen: 'councelling',
                                    params: {
                                        thread: item.sno,
                                    }
                                }
                            )}
                        >
                            <LinearGradient
                                colors={['#3BA9FE', '#3BA9']}
                                style={styles.btn1}
                                start={[0, 0]}
                                end={[1, 1]}
                            >
                                <Text style={styles.btntxt}>{item.name}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            );

        } else {
            return (
                <View style={{ width: "50%", alignItems: "center" }}>
                    <ScrollView>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('another',
                                {
                                    screen: 'councelling',
                                    params: {
                                        thread: item.sno,
                                    }
                                }

                            )}
                        >
                            <LinearGradient
                                colors={['#3BA9FE', '#3BA9']}
                                style={styles.btn1}
                                start={[0, 0]}
                                end={[1, 1]}
                            >
                                <Text style={styles.btntxt}>{item.name}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            )
        }

    }
    return (
        <View style={styles.main}>
            <View style={styles.top}>
                <View style={styles.left}><Text style={styles.course}>  COURSES</Text></View>
                <View style={{ height: 190, width: '60%' }}>
                    <Image
                        source={require('../assets/course.jpg')}
                        style={styles.topImg}
                    />
                </View>
            </View>
            <View style={styles.list}>
                <View style={styles.stream}>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.sno}
                        renderItem={renderer}
                        numColumns={2}
                    />
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    main: { backgroundColor: "white", height: "100%" },
    top: { flexDirection: "row", justifyContent: "space-between", marginTop: 40 },
    course: { fontSize: 30, fontWeight: 'bold', marginTop: 30 },
    topImg: { width: '100%', height: '100%' },
    btntxt: { backgroundColor: 'transparent', fontSize: 15, color: '#fff', },
    btn1: { width: 150, margin: "5%", padding: 7, alignItems: 'center', borderRadius: 6 },
    btn2: { width: 150, margin: "5%", padding: 7, alignItems: 'center', borderRadius: 6 },
    category: { fontSize: 18, marginLeft: 5 },
    stream: { flexDirection: "column", justifyContent: "space-around" },
    list: { marginTop: 20 },


});

export default Course