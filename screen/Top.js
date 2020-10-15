import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Top = () => {
    return (
        <View style={styles.top}>
            <Image
                source={require('../assets/owl.png')}
                style={styles.logo}
            />
            <Text style={styles.txt1}>admissionMantra</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    top: { height: '40%', alignItems: "center", justifyContent: "center" },

    logo: { width: 100, height: 100 },

    txt1: { color: "#12c2d3", fontSize: 28, marginTop: 10, fontWeight: "bold" },
});

export default Top;