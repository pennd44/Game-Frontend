import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'
import List from './components/Sample Components/List'

import Login from './components/Login/Login'
import Signup from './components/Login/Signup'
import Area from './components/Map/Area'

import LoginNavigator from './components/Login/LoginNavigator'
import GameNavigator from './GameNavigator'
import Battle from './components/Battle'
import { useSelector, useDispatch } from 'react-redux'


const navigator = createStackNavigator()

function Main() {

    let currentUser = useSelector(state => state.user)
    let battling = useSelector(state => state.isBattling)
    return (
        <NavigationContainer>
            {/* {true ? */}
            {Object.keys(currentUser).length === 0 ?
                <LoginNavigator /> :
                <navigator.Navigator>
                    <navigator.Screen options={{ headerShown: false }} name='GN' component={GameNavigator} />
                    <navigator.Screen options={{ headerShown: false }} name='Battle' component={Battle} />
                </navigator.Navigator>}
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Main
