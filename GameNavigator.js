import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MapNavigator from './components/Map/MapNavigator'
import Arena from './components/Arena/Arena'
import Profile from './components/Profile/ProfileNavigator'
import { useSelector, useDispatch } from 'react-redux'
import { fetchEnemies } from './actions'
import Map from './components/Map/Map'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { default as FIcon } from 'react-native-vector-icons/Fontisto';
import { default as LIcon } from 'react-native-vector-icons/Feather';


const navigator = createBottomTabNavigator()

const GameNavigator = (props) => {
    let battling = useSelector(state => state.isBattling)
    let dispatch = useDispatch()
    async function fetchData() {
        const res = await fetch('http://10.0.0.92:3000/api/v1/players')
        res.json()
            .then(enemies => dispatch(fetchEnemies(enemies)))
    }

    useEffect(() => {
        fetchData();
        battling ? props.navigation.navigate('Battle') : null
    }
        , [])
    return (<navigator.Navigator>
        <navigator.Screen name="Map" component={MapNavigator} options={{ tabBarIcon: () => { return <FIcon name="map" /> } }} />
        <navigator.Screen name="Profile" component={Profile} options={{ tabBarIcon: () => { return <LIcon name="user" /> } }} />
        <navigator.Screen name="Arena" component={Arena} options={{ tabBarIcon: () => { return <Icon name="sword-cross" /> } }} />
    </navigator.Navigator>);
}

export default GameNavigator;