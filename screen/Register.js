import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Image, TouchableOpacity, TextInput, ViewBase } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Top from './Top';
import { ScrollView } from 'react-native-gesture-handler';
import { Container, Button, Icon, Title, Item, Input, Form, Text, View, Label, Card, Picker } from 'native-base';
import ValidationComponent from 'react-native-form-validator';

export default class Register extends ValidationComponent {
    constructor(props) {
        super(props);
        this.state = { firstname: "", email: "", number: "", Age: "", lastname: "", gender: "", password: "",selected:'male' }
    }
    OnsignupPress = () => {
        const validated = this.validate({
            lastname: { minlength: 3, maxlength: 7, required: true },
            firstname: { minlength: 3, maxlength: 15, required: true },
            email: { email: true, required: true },
            number: { numbers: true },
            age: { required: true, minlength: 2, maxlength: 2 },
            password: { required: true, minlength: 6, }
        });
        if (validated) {
            return (
                alert('validated successfully ^%^%^^^&%*%&& ')
            )
        }
    }
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    render() {
        return (
            <View style={styles.main}>
                <ScrollView>

                    <View style={styles.top}>
                        <Image
                            source={require('../assets/owl.png')}
                            style={styles.logo}
                        />
                        <Text style={styles.txt1}>admissionMantra</Text>
                    </View>
                    <ScrollView>
                        <View
                            style={styles.middle}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <Item stackedLabel style={{ paddingRight: 60, borderBottomColor: "#8b8b8b", borderBottomWidth: 1, }}>
                                    <Label style={{ color: "#b3b3b3" }}>First Name</Label>
                                    <Input
                                        ref="firstname" onChangeText={(firstname) => this.setState({ firstname })} value={this.state.firstname}
                                    />
                                </Item>
                                <Item stackedLabel style={{ paddingRight: 80, borderBottomColor: "#8b8b8b", borderBottomWidth: 1, marginLeft: 10 }}>
                                    <Label style={{ color: "#b3b3b3" }}>Last Name</Label>
                                    <Input
                                        ref="lastname" onChangeText={(lastname) => this.setState({ lastname })} value={this.state.lastname}
                                    />

                                </Item>

                            </View>

                            <View>
                                <Text
                                    style={styles.Label}
                                >
                                    Email Address
                    </Text>
                                <TextInput
                                    style={styles.input}
                                    ref="email" onChangeText={(email) => this.setState({ email })} value={this.state.email}
                                />
                            </View>

                            <View>
                                <Text
                                    style={styles.Label}
                                >
                                    Password
                </Text>
                                <TextInput
                                    style={styles.input}
                                    ref="password" onChangeText={(password) => this.setState({ password })} value={this.state.password}
                                />

                            </View>
                            <View>
                                <Text
                                    style={styles.Label}
                                >
                                    Phone Number
                </Text>
                                <TextInput
                                    style={styles.input}
                                    ref="number" onChangeText={(number) => this.setState({ number })} value={this.state.number}
                                />

                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Item stackedLabel style={{ paddingRight: 40, borderBottomColor: "#8b8b8b", borderBottomWidth: 1, }}>
                                    <Label style={{ color: "#b3b3b3" }}>Gender</Label>
                                    <Picker
                                        note
                                        mode="dropdown"
                                        style={{ width: 120 }}
                                        selectedValue={this.state.selected}
                                        onValueChange={this.onValueChange.bind(this)}
                                    >
                                        <Picker.Item label="Male" value="male" />
                                        <Picker.Item label="Female" value="female" />
                                        <Picker.Item label="Others" value="others" />
                                    </Picker>

                                </Item>
                                <Item stackedLabel style={{ paddingRight: 120, borderBottomColor: "#8b8b8b", borderBottomWidth: 1, marginLeft: 10 }}>
                                    <Label style={{ color: "#b3b3b3" }}>Age</Label>
                                    <Input
                                        ref="age" onChangeText={(Age) => this.setState({ Age })} value={this.state.Age}
                                    />

                                </Item>

                            </View>

                        </View>
                    </ScrollView>
                    <View style={styles.bottom}>
                        <View>
                            <TouchableOpacity style={{ width: "100%", paddingRight: "10%" }} onPress={this.OnsignupPress}>
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
                            <View><Text style={styles.acctxt}>Already a user?</Text></View>
                            <View>
                                <TouchableOpacity>
                                    <Text style={styles.link}>Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Card>
                            {this.isFieldInError('firstname') && this.getErrorsInField('firstname').map(errorMessage => <Text note style={styles.error}>{errorMessage}</Text>)}
                        </Card>
                        <Card>
                            {this.isFieldInError('lastname') && this.getErrorsInField('lastname').map(errorMessage => <Text note style={styles.error}>{errorMessage}</Text>)}
                        </Card>
                        <Card>
                            {this.isFieldInError('number') && this.getErrorsInField('number').map(errorMessage => <Text note style={styles.error}>{errorMessage}</Text>)}
                        </Card>
                        <Card>
                            {this.isFieldInError('email') && this.getErrorsInField('email').map(errorMessage => <Text note style={styles.error}>{errorMessage}</Text>)}
                        </Card>
                        <Card>
                            {this.isFieldInError('password') && this.getErrorsInField('password').map(errorMessage => <Text note style={styles.error}>{errorMessage}</Text>)}
                        </Card>
                        <Card>
                            {this.isFieldInError('gender') && this.getErrorsInField('gender').map(errorMessage => <Text note style={styles.error}>{errorMessage}</Text>)}
                        </Card>
                        <Card>
                            {this.isFieldInError('Age') && this.getErrorsInField('Age').map(errorMessage => <Text note style={styles.error}>{errorMessage}</Text>)}
                        </Card>

                    </View>

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: { flexDirection: "column" },

    middle: { height: '100%', justifyContent: "center", width: "80%", marginLeft: "10%" },

    input: { borderBottomColor: "#8b8b8b", borderBottomWidth: 1, width: "100%", paddingLeft: 10, paddingBottom: 10, paddingRight: 10, fontSize: 18, },

    Label: { marginTop: 20, color: "#b3b3b3" },


    mainImg: { width: 271, height: 197, marginBottom: 10 },

    txt2: { fontSize: 18, textAlign: 'center', color: "#252526", fontWeight: "100", marginBottom: 20 },

    bottom: { flexDirection: 'column', justifyContent: "space-around" },

    btn1: { width: "100%", margin: 20, padding: 15, alignItems: 'center', borderRadius: 5 },

    btn2: { width: 130, margin: 20, padding: 15, alignItems: 'center', borderRadius: 5 },

    btntxt: { backgroundColor: 'transparent', fontSize: 15, color: '#fff', },

    acc: { flexDirection: "row", justifyContent: "center", },

    acctxt: { color: "#ccc" },

    link: { color: "#12c2d3", fontWeight: "800" },

    top: { marginTop: "15%", alignItems: "center", justifyContent: "center" },

    logo: { width: 100, height: 100 },

    txt1: { color: "#12c2d3", fontSize: 28, marginTop: 10, fontWeight: "bold" },

    error: { color: 'red', fontSize: 13, textAlign: 'center' }
});
