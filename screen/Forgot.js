import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Top from './Top';

const Forgot = ({ navigation, route }) => {

    const [usrinp, updateUsrInp] = useState('');

    const [data, setData] = useState([]);
    const [user, setUser] = useState(null);
    const changeone = (txt1) => {
        updateUsrInp(txt1);
    }


    const myFunc = (txt) => {
        console.log("My Value is " + txt);
        if (txt == 1) {
            alert("Please check your Email for new password!");
            navigation.navigate('Login');
        } else if(txt == 2){
            alert("User not Found! Please register to continue.");
            navigation.navigate('Register');
        }else{
            alert("Please try again later");
            navigation.navigate('Main');
        }
    }
    const updateData = (t1, t2) => {
        setUser("http://helixsmartlabs.in/app/dashboard/forgot.php?email=" + t1);
        console.log(user);
        fetch("http://helixsmartlabs.in/app/dashboard/forgot.php?email=" + t1)
            .then((response) => response.json())
            .then((response) => myFunc(response[0].id))
            .catch((error) => alert(error));
    }
    const showVal = () => {
        console.log([...data[0].id]);
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <View style={styles.main}>
                <Top />
                <View style={styles.middle}>
                    <Text style={{ marginTop: 20, color: "#b3b3b3" }}>Email</Text>
                    <TextInput style={{ borderBottomColor: "#8b8b8b", borderBottomWidth: 1, width: "100%", paddingLeft: 0, paddingTop: 10, paddingRight: 10, fontSize: 18 }}
                        value={usrinp}
                        onChangeText={changeone}
                        returnKeyType="next"
                        onSubmitEditing={() => { this.secondTextInput.focus(); }}
                        blurOnSubmit={false}
                    ></TextInput>
                    <Text style={{ marginTop: 10, color: "#b3b3b3"}}>Check Email for new Password</Text>
                    
                </View>

                <View style={styles.bottom}>
                    <View>
                        <TouchableOpacity
                            onPress={() => updateData(usrinp)}
                            style={{ width: "100%", paddingRight: "10%" }}>
                            <LinearGradient
                                colors={['#36D1DC', '#5B86E5']}
                                style={styles.btn1}
                                start={[0, 0]}
                                end={[1, 1]}
                            >
                                <Text
                                    style={styles.btntxt}>
                                    Reset Password
                        </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    main: { flexDirection: "column", backgroundColor: "white" },

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

export default Forgot