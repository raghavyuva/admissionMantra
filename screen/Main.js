import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Top from './Top';

const Main = props => {
    const { navigation } = props
    const myFunc = () => {
        navigation.navigate('Login');
    }
    const myFuncReg = () => {
        navigation.navigate('Register');
    }
    return (
        <View style={styles.main}>
            <Top />
            <View style={styles.middle}>
                <Image
                    source={require('../assets/loginOne.jpg')}
                    style={styles.mainImg}
                />
                <View>
                    <Text style={styles.txt2}>Find The Right Oppturnities{"\n"}At Your Footsteps</Text>
                </View>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity
                    onPress={() => myFunc()}
                >
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
                <TouchableOpacity
                    onPress={() => myFuncReg()}
                >
                    <LinearGradient
                        colors={['#4c669f', '#3b5998', '#192f6a']}
                        style={styles.btn2}
                        start={[0, 0]}
                        end={[1, 1]}
                    >
                        <Text
                            style={styles.btntxt}>
                            Sign Up
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

export default Main