import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CourseComp from './CourseComp';
import { ScrollView } from 'react-native-gesture-handler';

const Course = ({ navigation,route }) => {
    const [data, setData] = useState('');
    const { useremail} = route.params;
    const { userpass} = route.params;
 const   email = [useremail]
    useEffect(() => {
        const Listener = fetch('http://helixsmartlabs.in/app/dashboard/stream.php')
            .then((response) => response.json())
            .then((responseJson) => {

                setData(responseJson);
                console.log(data);
            }).catch((error) => {
                console.log("Data fetching failed");
            });
    }, []);
    const renderer = ({ item, index,useremail }) => {
        if (item.id % 2 == 0) {
            console.log(useremail)
            return (
                <ScrollView>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Councelling', { thread: item.sno,usremail:useremail,usrpass:userpass })}
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
            );

        } else {
            return (
                <ScrollView>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Councelling', { thread: item.sno })}
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
            )
        }

    }
    return (
        <View style={styles.main}>
            <View style={styles.top}>
                <View style={styles.left}><Text style={styles.course}>  COURSES</Text></View>
                <View style={styles.right}>
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
                        extraData={useremail}
                    />
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    main: { backgroundColor: "white", height: "100%" },
    top: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
    course: { fontSize: 26 },
    topImg: { width: 212, height: 230 },
    btntxt: { backgroundColor: 'transparent', fontSize: 15, color: '#fff', },
    btn1: { width: 150, margin: "5%", padding: 7, alignItems: 'center', borderRadius: 6 },
    btn2: { width: 150, margin: "5%", padding: 7, alignItems: 'center', borderRadius: 6 },
    category: { fontSize: 18, marginLeft: 5 },
    stream: { flexDirection: "row", justifyContent: "space-between" },
    list: { marginTop: 20 }
});

export default Course