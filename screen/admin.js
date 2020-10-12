import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Top from './Top';
const Admin = props => {
    const [body, setBody] = useState('');
    const [title, setTitle] = useState('');
    const [data, setData] = useState([]);
    const [tokens, setTokens] = useState('');
    const Onsubmit = () => {
        if (!title || !body) {
            alert('please enter the fields to continue');
        } else {
            fetch("https://exp.host/--/api/v2/push/send",
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({
                        to: tokens,
                        sound: "default",
                        body: `${body}`,
                        title: `${title}`
                    }) 
                })
        }
    } 
 
    useEffect(() => { 
        fetch(`http://helixsmartlabs.in/app/dashboard/fetchtoken.php`)
        .then((response) => response.json())
        .then((responseJson) => { 
            setData([...responseJson]);  
          
        }).catch((error) => { 
            console.log("Data fetching failed"); 
        });
        Object.keys(data).map((key,index)=>{ 
            setTokens(data[key].token)
            console.log(tokens);
        }) 
    }, []) 
 
    return (
        <View style={styles.main}>
            <Top />
            <View style={styles.middle}>
                <Text style={{ marginTop: 20, color: "#b3b3b3" }}>Title</Text>
                <TextInput style={{ borderBottomColor: "#8b8b8b", borderBottomWidth: 1, width: "100%", paddingLeft: 0, paddingTop: 10, paddingRight: 10, fontSize: 18, }}
                    value={title}
                    onChangeText={(userPassword) => setTitle(userPassword)}

                ></TextInput>
                <Text style={{ marginTop: 20, color: "#b3b3b3" }}>Body</Text>
                <TextInput style={{ borderBottomColor: "#8b8b8b", borderBottomWidth: 1, width: "100%", paddingLeft: 0, paddingTop: 10, paddingRight: 10, fontSize: 18, }}
                    value={body}
                    onChangeText={(userPassword) => setBody(userPassword)}
                ></TextInput>
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
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: { flexDirection: "column", backgroundColor: "white" },
    middle: { height: '40%', alignItems: "center", justifyContent: "center" },
    mainImg: { width: 271, height: 197, marginBottom: 10 },
    txt2: { fontSize: 18, textAlign: 'center', color: "#252526", fontWeight: "100", marginBottom: 20 },
    bottom: { height: '20%', flexDirection: 'row', justifyContent: "space-around" },
    btn1: { width: 130, margin: 20, padding: 15, alignItems: 'center', borderRadius: 5 },
    btn2: { width: 130, margin: 20, padding: 15, alignItems: 'center', borderRadius: 5 },
    btntxt: { backgroundColor: 'transparent', fontSize: 15, color: '#fff', }

});

export default Admin;