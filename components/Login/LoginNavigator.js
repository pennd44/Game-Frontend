import React from 'react';
import { SafeAreaView, View, Button, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './Login'
import Signup from './Signup'
import CharacterPicker from './Character Picker/Index'

const navigator = createStackNavigator()

const LoginNavigator = (props) => {
    return (

        <navigator.Navigator
        // screenOptions={{headerShown: false}}
        >
            <navigator.Screen options={{ headerShown: false }} name='Login' component={Login} />
            <navigator.Screen options={{ headerShown: false }} name='Choose a Character' component={CharacterPicker} />
            <navigator.Screen options={{ headerStyle: {} }} name='Signup' component={Signup} />


        </navigator.Navigator>
    );
}

export default LoginNavigator;