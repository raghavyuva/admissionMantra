import React, { Component, useState, useEffect, useContext } from 'react';
import { StyleSheet, FlatList, ScrollView, Dimensions, Share, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
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
    const Listener = () => {
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
        <KeyboardAvoidingView>
            <View style={styles.main}>
                <View style={{ margin: 20, height: '30%', }}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ textAlign: 'Left', color: 'grey', fontWeight: '500', fontSize: 16 }}>First Name</Text>
                        <View style={{ marginTop: 5, width: "100%", padding: 5, borderRadius: 7, borderWidth: 2, borderColor: "grey", borderStyle: "dashed", backgroundColor: "#ccc" }}>
                            <Text style={{ fontSize: 20, fontWeight: '400' }}>{data.fname}</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ textAlign: 'Left', color: 'grey', fontWeight: '500', fontSize: 16 }}>Last Name</Text>
                        <View style={{ marginTop: 5, width: "100%", padding: 5, borderRadius: 7, borderWidth: 2, borderColor: "grey", borderStyle: "dashed", backgroundColor: "#ccc" }}>
                            <Text style={{ fontSize: 20, fontWeight: '400' }}>{data.lname}</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ textAlign: 'left', color: 'grey', fontWeight: '500', fontSize: 16 }}>Email</Text>
                        <View style={{ marginTop: 5, width: "100%", padding: 5, borderRadius: 7, borderWidth: 2, borderColor: "grey", borderStyle: "dashed", backgroundColor: "#ccc" }}>
                            <Text style={{ fontSize: 20, fontWeight: '400' }}>{data.email}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: "80%", marginLeft: "10%", marginTop: 15 }}>
                    <Text style={{ marginTop: 20, color: "#00a2e8", fontSize: 18 }}>Request for Password Change</Text>
                    <TextInput
                        style={{ marginTop: 15, borderBottomColor: "#8b8b8b", borderBottomWidth: 1, width: "100%", paddingLeft: 0, paddingTop: 10, paddingRight: 10, fontSize: 18 }}
                        placeholder="Current Password"
                        value={password}
                        onChangeText={(userPassword) => setPassword(userPassword)}
                    />
                    <View style={{flexDirection:"row"}}>
                    <TextInput
                        style={{ marginTop: 15, borderBottomColor: "#8b8b8b", borderBottomWidth: 1, width: "50%", paddingLeft: 0, paddingTop: 10, paddingRight: 10, fontSize: 18, marginRight:5 }}
                        placeholder="New Password"
                        value={newpassword}
                        onChangeText={(userPassword) => setNewpassword(userPassword)}
                    />
                    <TextInput
                        style={{ marginTop: 15, borderBottomColor: "#8b8b8b", borderBottomWidth: 1, width: "50%", paddingLeft: 0, paddingTop: 10, paddingRight: 10, fontSize: 18,marginLeft:5 }}
                        placeholder="Confirm Password"
                        value={confirmpassword}
                        onChangeText={(userPassword) => setConfirmpassword(userPassword)}
                    />
                    </View>
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
                        style={{ width: "100%", paddingRight: "10%", }}>
                        <LinearGradient
                            colors={['#4c669f', '#3b5998', '#192f6a']}
                            style={styles.btn1}
                            start={[0, 0]}
                            end={[1, 1]}
                        >
                            <Text
                                style={styles.btntxt}>
                                Logout
                        </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
export default Profile;
const styles = StyleSheet.create({
    main: { height: "100%", backgroundColor: "white", paddingTop: 30 },
    btntxt: { backgroundColor: 'transparent', fontSize: 15, color: '#fff', },
    btn1: { width: "100%", margin: 20, padding: 15, alignItems: 'center', borderRadius: 5 },


});
