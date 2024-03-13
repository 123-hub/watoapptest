import { View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStartedPage from '../../screens/GetStartedPage';
import LoginPage from '../../screens/LoginPage';
import SignupPage from '../../screens/SignupPage';


const stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
     <stack.Navigator initialRouteName="getStarted">
        <stack.Screen name='getStarted' component={GetStartedPage} options={{headerShown: false}}/>
        <stack.Screen name='login' component={LoginPage} options={{headerShown: false}}/>
        <stack.Screen name='signup' component={SignupPage} options={{headerShown: false}}/>
     </stack.Navigator>
    </NavigationContainer>
  )
}