import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Top from './Top';

const Register = ({ navigation, route }) => {

    const [user,setUser] = useState(null);
    const [first, updateFirst] = useState('');
    const changeone = (txt1) => {
        updateFirst(txt1);
    }

    const [last, updateLast] = useState('');
    const changetwo = (txt2) => {
        updateLast(txt2);
    }

    const [email, updateEmail] = useState('');
    const changethree = (txt3) => {
        updateEmail(txt3);
    }

    const [pass, updatePass] = useState('');
    const changefour = (txt4) => {
        updatePass(txt4);
    }

    const [cpass, updateCpass] = useState('');
    const changefive = (txt5) => {
        updateCpass(txt5);
    }

    const [mobile, updateMobile] = useState('');
    const changesix = (txt6) => {
        updateMobile(txt6);
    }

    const myFunc = (txt) => {
        console.log("My Value is " + txt);
        if (txt == 0) {
            alert("Password Did Not Match");
        }else if (txt == 1) {
            alert("Email Alreay Exist");
        }else if (txt == 2) {
            alert("Successfully Registered\nVerify Email!");
            navigation.navigate('Login');
        }else if (txt == 3) {
            alert("Try Again Later");
        }else if (txt == 4) {
            alert("All Fields are Mandatory");
        }

    }

    const updateData = (t1, t2, t3, t4, t5, t6) => {
        console.log("In updateData");
        setUser("http://helixsmartlabs.in/app/dashboard/register.php?fname="+t1+"&lname="+t2+"&email="+t3+"&password="+t4+"&cpassword="+t5+"&phone="+t6);
        console.log(user);
        
        fetch("http://helixsmartlabs.in/app/dashboard/register.php?fname="+t1+"&lname="+t2+"&email="+t3+"&password="+t4+"&cpassword="+t5+"&phone="+t6)
            .then((response) => response.json())
            .then((response) => myFunc(response[0].id))
            .catch((error) => alert(error));


    }
    return (
        <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}>
        <View style={styles.main}>
            <Top />
            <ScrollView>
            <View>
                <Text style={{ marginTop: 20, marginLeft: "10%", color: "#b3b3b3" }}>Basic Info</Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 20 }}>

                <View style={{ width: "50%", paddingLeft: "10%", paddingRight: "2%" }}>
                    <TextInput style={{ borderBottomColor: "#8b8b8b", borderBottomWidth: 1, width: "100%", paddingLeft: 0, paddingTop: 20, paddingRight: 10, fontSize: 18 }}
                        value={first}
                        onChangeText={changeone}
                        returnKeyType="next"
                        placeholder="First Name"
                        onSubmitEditing={() => { this.lname.focus(); }}
                    ></TextInput>
                </View>
                <View style={{ width: "50%", paddingLeft: "2%", paddingRight: "10%" }}>
                    <TextInput style={{ borderBottomColor: "#8b8b8b", borderBottomWidth: 1, width: "100%", paddingLeft: 0, paddingTop: 20, paddingRight: 10, fontSize: 18 }}
                        value={last}
                        onChangeText={changetwo}
                        returnKeyType="next"
                        placeholder="Last Name"
                        ref={(input) => { this.lname = input; }}
                        onSubmitEditing={() => { this.email.focus(); }}
                    ></TextInput>
                </View>
            </View>
            <View>
                <Text style={{ marginTop: 20, marginLeft: "10%", color: "#b3b3b3" }}>Personal Info</Text>
            </View>
            <View>
                <View style={{ width: "100%", paddingLeft: "10%", paddingRight: "10%" }}>
                    <TextInput style={{ borderBottomColor: "#8b8b8b", borderBottomWidth: 1, width: "100%", paddingLeft: 0, paddingTop: 20, paddingRight: 10, fontSize: 18 }}
                        onChangeText={changethree}
                        returnKeyType="next"
                        placeholder="Email"
                        ref={(input) => { this.email = input; }}
                        onSubmitEditing={() => { this.pass.focus(); }}
                    ></TextInput>
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={{ width: "50%", paddingLeft: "10%", paddingRight: "2%" }}>
                    <TextInput style={{ borderBottomColor: "#8b8b8b", borderBottomWidth: 1, width: "100%", paddingLeft: 0, paddingTop: 20, paddingRight: 10, fontSize: 18 }}
                        onChangeText={changefour}
                        returnKeyType="next"
                        placeholder="Password"
                        ref={(input) => { this.pass = input; }}
                        onSubmitEditing={() => { this.cpass.focus(); }}
                    ></TextInput>
                </View>
                <View style={{ width: "50%", paddingLeft: "2%", paddingRight: "10%" }}>
                    <TextInput style={{ borderBottomColor: "#8b8b8b", borderBottomWidth: 1, width: "100%", paddingLeft: 0, paddingTop: 20, paddingRight: 10, fontSize: 18 }}
                        onChangeText={changefive}
                        returnKeyType="next"
                        placeholder="Confirm Password"
                        ref={(input) => { this.cpass = input; }}
                        onSubmitEditing={() => { this.mobile.focus(); }}
                    ></TextInput>
                </View>
            </View>
            <View>
                <View style={{ width: "100%", paddingLeft: "10%", paddingRight: "10%" }}>
                    <TextInput style={{ borderBottomColor: "#8b8b8b", borderBottomWidth: 1, width: "100%", paddingLeft: 0, paddingTop: 20, paddingRight: 10, fontSize: 18 }}
                        returnKeyType="next"
                        placeholder="Mobile Number"
                        ref={(input) => { this.mobile = input; }}
                        onChangeText={changesix}
                    ></TextInput>
                </View>
            </View>
        

            <View>
                <TouchableOpacity
                    onPress={() => updateData(first, last, email, pass, cpass, mobile)}
                    style={{ width: "100%", paddingRight: "10%" }}>
                    <LinearGradient
                        colors={['#36D1DC', '#5B86E5']}
                        style={styles.btn1}
                        start={[0, 0]}
                        end={[1, 1]}
                    >
                        <Text
                            style={styles.btntxt}>
                            Register
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={styles.acc}>
                <View><Text style={styles.acctxt}>Already have an account?</Text></View>
                <View>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.link}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{height:50}}>
            </View>
            </ScrollView>
        </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    main: { flexDirection: "column", backgroundColor: "white", height: "100%" },

    middle: { height: '40%', width: "80%", marginLeft: "10%" },

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

export default Register