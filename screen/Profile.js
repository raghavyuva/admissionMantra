import React, { Component, useState, useEffect, useContext } from 'react';
import { StyleSheet, FlatList, ScrollView, Dimensions, Share, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { EvilIcons, AntDesign, FontAwesome5, MaterialCommunityIcons, Ionicons, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Top from './Top';
import PDFReader from 'rn-pdf-reader-js'
import { AsyncStorage } from 'react-native';
import { AuthContext } from '../navigation/AuthContext';

const Profile = () => {
    const [data, setData] = useState('');
    const [password, setPassword] = useState("");
    const [newpassword, setNewpassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const { logout } = useContext(AuthContext);

    useEffect(() => {
        const Listener = fetch(`http://helixsmartlabs.in/app/dashboard/profile.php?email=dhruvrohatgi53@gmail.com`)
            .then((response) => response.json())
            .then((responseJson) => {
                setData(...responseJson);

            }).catch((error) => {
                console.log("Data fetching failed");
            });
        return Listener;
    }, []);
    const Onlogout = () => {
        AsyncStorage.removeItem('token');
    }
    const Listener =()=>{
        fetch(`http://helixsmartlabs.in/app/dashboard/profile.php?email=dhruvrohatgi53@gmail.com`)
            .then((response) => response.json())
            .then((responseJson) => {
                setData(...responseJson);

            }).catch((error) => {
                console.log("Data fetching failed");
            });
    }
    const Onsubmit = () => {
        if (data.password == password) {
            if (newpassword == confirmpassword) {
                fetch(`http://helixsmartlabs.in/app/dashboard/reset.php?email=${data.email}&password=${newpassword}`, {
                    method: 'GET',
                }).then(function (response) {
                    return response.json();
                }).then((response) => {
                    if (response.error) {
                        alert('error')
                    } else {
                        alert('password updated successfully')
                        setConfirmpassword(null)
                        setNewpassword(null)
                        setPassword(null)
                        Listener()
                    }
                })
            } else {
                alert('new password and confirm passwords are different');
            }
        } else {
            alert('current password is incorrect! ');
        }
    }
    return (
        <View style={styles.main}>
            <View style={{ borderRadius: 25, margin: 20, height: '30%' }}>
                <Text style={{ textAlign: 'center', color: 'blue', fontWeight: '800', fontSize: 24 }}>First Name:{data.fname}</Text>
                <Text style={{ textAlign: 'center', color: 'blue', fontWeight: '800', fontSize: 24 }}>Last Name:{data.lname}</Text>

                <Text style={{ textAlign: 'center', color: 'blue', fontWeight: '800', fontSize: 24 }}>Email : {data.email}</Text>
            </View>
            <View style={{ margin: 20 }}>
                <Text style={{ marginTop: 20, color: "#b3b", fontSize: 18 }}>Request for Password Change</Text>
                <TextInput
                    style={{ borderBottomColor: "#8b8b8b", borderBottomWidth: 1, width: "100%", paddingLeft: 0, paddingTop: 10, paddingRight: 10, fontSize: 18 }}
                    placeholder="Current Password"
                    value={password}
                    onChangeText={(userPassword) => setPassword(userPassword)}
                />
                <TextInput
                    style={{ borderBottomColor: "#8b8b8b", borderBottomWidth: 1, width: "100%", paddingLeft: 0, paddingTop: 10, paddingRight: 10, fontSize: 18 }}
                    placeholder="Enter New Password"
                    value={newpassword}
                    onChangeText={(userPassword) => setNewpassword(userPassword)}
                />
                <TextInput
                    style={{ borderBottomColor: "#8b8b8b", borderBottomWidth: 1, width: "100%", paddingLeft: 0, paddingTop: 10, paddingRight: 10, fontSize: 18 }}
                    placeholder="Enter New Password to confirm"
                    value={confirmpassword}
                    onChangeText={(userPassword) => setConfirmpassword(userPassword)}
                />
                <TouchableOpacity
                    onPress={Onsubmit}
                    style={{ width: "100%", paddingRight: "10%" }}>
                    <LinearGradient
                        colors={['#36D1DC', '#5B86E5']}
                        style={styles.btn1}
                        start={[0, 0]}
                        end={[1, 1]}
                    >
                        <Text
                            style={styles.btntxt}>
                            Submit
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={Onlogout}
                    style={{ width: "100%", paddingRight: "10%" }}>
                    <LinearGradient
                        colors={['#36D1DC', '#5B86E5']}
                        style={styles.btn1}
                        start={[0, 0]}
                        end={[1, 1]}
                    >
                        <Text
                            style={styles.btntxt}>
                            Submit
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Profile;
const styles = StyleSheet.create({
    main: { height: "100%", backgroundColor: "white", paddingTop: 30 },
    btntxt: { backgroundColor: 'transparent', fontSize: 15, color: '#fff', },
    btn1: { width: "100%", margin: 20, padding: 15, alignItems: 'center', borderRadius: 5 },


});
