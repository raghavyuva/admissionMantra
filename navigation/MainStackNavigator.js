import * as React from 'react'
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
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();
const coursestack = () => {
    return (
        <Stack.Navigator initialRouteName='Main' screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='Course' component={Course} options={{ title: 'Dashboard' }} />
            <Stack.Screen name='Main' component={Main} options={{ title: 'Bed Bureau' }} />
            <Stack.Screen name='Login' component={Login} options={{ title: 'Bed Bureau' }} />
            <Stack.Screen name='CourseComp' component={CourseComp} options={{ title: 'Bed Bureau' }} />
            <Stack.Screen name='Paper' component={Paper} options={{ title: 'Bed Bureau' }} />
            <Stack.Screen name='Pdf' component={Pdf} options={{ title: 'Bed Bureau' }} />
            <Stack.Screen name='Register' component={Register} options={{ title: 'Bed Bureau' }} />
            <Stack.Screen name='Forgot' component={Forgot} options={{ title: 'Bed Bureau' }} />
        </Stack.Navigator>
    );
}
const Tabnav = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
          }}>
            <Tab.Screen name="Home" component={Councelling} 
            
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name='ios-home' color={color} size={size} />
                ),
              
            }}

/>
            <Tab.Screen name="Exam_details" component={Exam} options={{
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
const MainStackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='coursestack' headerMode='none'>
                <Stack.Screen name='tab' component={Tabnav} />
                <Stack.Screen name='coursestack' component={coursestack} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator