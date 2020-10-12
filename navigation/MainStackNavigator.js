import React, { useContext, useState, useEffect, useMemo } from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Councelling from '../screen/Councelling';
import Course from '../screen/Course';
import Login from '../screen/Login';
import Main from '../screen/Main';
import Pdf from '../screen/Pdf';
import CourseComp from '../screen/CourseComp';
import Paper from '../screen/Paper';
import { Ionicons, FontAwesome5, MaterialCommunityIcons, Feather, SimpleLineIcons, Octicons, Fontisto, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import Exam from '../screen/examdetails';
import Profile from '../screen/Profile';
import Register from '../screen/Register';
import Forgot from '../screen/Forgot';
import Notification from '../screen/Notification';
import { AsyncStorage, ActivityIndicator, View } from 'react-native';
import { AuthContext } from "./context";
import Admin from "../screen/admin";
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();
const Rootstack = () => {
    return (
        <Stack.Navigator initialRouteName='Main' screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='Main' component={Main} options={{ title: 'Main Screen' }} />
            <Stack.Screen name='Login' component={Login} options={{ title: 'Login' }} />
            <Stack.Screen name='Forgot' component={Forgot} options={{ title: 'Forgot Password' }} />
            <Stack.Screen name='Register' component={Register} options={{ title: 'Register' }} />
        </Stack.Navigator>
    );
}
const coursestack = () => {
    return (
        <Stack.Navigator headerMode={"none"}>
            <Stack.Screen name='CourseComp' component={CourseComp} options={{ title: 'Course Comp' }} />
            <Stack.Screen name='Paper' component={Paper} options={{ title: 'Paper' }} />
            <Stack.Screen name='Pdf' component={Pdf} options={{ title: 'PDF View' }} />

        </Stack.Navigator>
    )
}
const anotherstack = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='councelling' component={Councelling} options={{ title: 'Dashboard' }} />
            <Stack.Screen name='notify' component={Notification} options={{ title: 'Dashboard' }} />
            <Stack.Screen name='admin' component={Admin} options={{ title: 'Dashboard' }} />
        </Stack.Navigator>
    )
}
const Tabnav = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#262626',
            inactiveTintColor: 'gray',
        }}>
            <Tab.Screen name="Home" component={Course}

                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='ios-home' color={color} size={size} />
                    ),

                }}

            />
            <Tab.Screen name="Exam Details" component={Exam} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name='md-paper' color={color} size={size} />
                )
            }}

            />
            <Tab.Screen name='profile' component={Profile} options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="user" size={size} color={color} />
                )
            }}

            />
        </Tab.Navigator>
    )
}
const Homestack = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='tab' component={Tabnav} />
            <Stack.Screen name='coursestack' component={coursestack} />
            <Stack.Screen name='another' component={anotherstack} />
        </Stack.Navigator>
    )
}
const MainStackNavigator = () => {
    const [hastoken, setHastoken] = useState('');
    const [loading, setLoading] = useState(true);
    const authContext = React.useMemo(() => ({
        signIn: (usrinp) => {
            AsyncStorage.setItem('token', usrinp)
            setHastoken(true);
        },
        logout: () => {
            AsyncStorage.removeItem('token')
            setHastoken(false)
        }
    }))
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
        const listener = AsyncStorage.getItem("token").then((token) => {
            setHastoken(token !== null)
        })

    }, [])
    if (loading) {
        return (
            <View style={{ justifyContent: "center", flex: 1 }}>
                <ActivityIndicator size={100} color={'#5B86E5'} style={{ alignSelf: 'center' }} />
            </View>

        )
    }
    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {hastoken ? <Homestack /> : <Rootstack />}
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

export default MainStackNavigator;