import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Councelling from '../screen/Councelling';
import Course from '../screen/Course';
import Login from '../screen/Login';
import Main from '../screen/Main';
import Pdf from '../screen/Pdf';
import CourseComp from '../screen/CourseComp';
const Stack = createStackNavigator()

const MainStackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Main' screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='Course' component={Course} options={{ title: 'Dashboard' }} />
                <Stack.Screen name='Main' component={Main} options={{ title: 'Bed Bureau' }} />
                <Stack.Screen name='Login' component={Login} options={{ title: 'Bed Bureau' }} />
                <Stack.Screen name='Councelling' component={Councelling} options={{ title: 'Bed Bureau' }} />
                <Stack.Screen name='CourseComp' component={CourseComp} options={{ title: 'Bed Bureau' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator