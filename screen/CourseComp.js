import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';




const CourseComp = props => {
    const { navigation } = props

    const myFunc = (text) => {
        navigation.navigate('Councelling');
        console.log(text);
    }
    return (
        <View style={styles.main}>
            
            <TouchableOpacity 
            onPress={() => myFunc("test")}
            >
                <LinearGradient
                    colors={['#3BA9FE', '#3BA9FE']}
                    style={styles.btn1}
                    start={[0, 0]}
                    end={[1, 1]}
                >
                    <Text style={styles.btntxt}>MBBS</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    btntxt: { backgroundColor: 'transparent', fontSize: 15, color: '#fff', },
    btn1: { width: 150, margin: "5%", padding: 7, alignItems: 'center', borderRadius: 6 }
    
});

export default CourseComp