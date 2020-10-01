import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Top from './Top';

const Login = () => {
    return (
        <View style={styles.main}>
            <Top />
            <View style={styles.middle}>
                <Text style={{ marginTop: 20, color: "#b3b3b3" }}>Email</Text>
                <TextInput style={{ borderBottomColor: "#8b8b8b", borderBottomWidth: 1, width: "100%", paddingLeft: 10, paddingBottom: 10, paddingRight: 10, fontSize: 18 }}></TextInput>
                <Text style={{ marginTop: 20, color: "#b3b3b3" }}>Password</Text>
                <TextInput style={{ borderBottomColor: "#8b8b8b", borderBottomWidth: 1, width: "100%", paddingLeft: 10, paddingBottom: 10, paddingRight: 10, fontSize: 18, }}></TextInput>
                <TouchableOpacity style={{ marginTop: 10, alignItems: "center" }}><Text style={{ color: "#b3b3b3" }}>Forgot Password?</Text></TouchableOpacity>
            </View>

            <View style={styles.bottom}>
                <View>
                    <TouchableOpacity style={{ width: "100%", paddingRight: "10%" }}>
                        <LinearGradient
                            colors={['#36D1DC', '#5B86E5']}
                            style={styles.btn1}
                            start={[0, 0]}
                            end={[1, 1]}
                        >
                            <Text
                                style={styles.btntxt}>
                                Login
                        </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={styles.acc}>
                    <View><Text style={styles.acctxt}>Don't have an account?</Text></View>
                    <View>
                        <TouchableOpacity>
                            <Text style={styles.link}> Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    main: { flexDirection: "column" },

    middle: { height: '40%', justifyContent: "center", width: "80%", marginLeft: "10%" },

    mainImg: { width: 271, height: 197, marginBottom: 10 },

    txt2: { fontSize: 18, textAlign: 'center', color: "#252526", fontWeight: "100", marginBottom: 20 },

    bottom: { height: '20%', flexDirection: 'column', justifyContent: "space-around" },

    btn1: { width: "100%", margin: 20, padding: 15, alignItems: 'center', borderRadius: 5 },

    btn2: { width: 130, margin: 20, padding: 15, alignItems: 'center', borderRadius: 5 },

    btntxt: { backgroundColor: 'transparent', fontSize: 15, color: '#fff', },

    acc: { flexDirection: "row", justifyContent: "center", },

    acctxt: { color: "#ccc" },

    link: { color: "#12c2d3", fontWeight: "800" }

});

export default Login