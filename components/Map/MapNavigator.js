import React from 'react';
import { SafeAreaView, View, Button, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Area from './Area'
import Map from './Map'
import Shop from './Shop'
import Training from './Training'
import Header from '../Header/Header'

const navigator = createStackNavigator()

const MapNavigator = (props) => {
    return (

        <navigator.Navigator
            screenOptions={{ headerTransparent: true, headerTitle: props => <Header {...props} /> }}
        >
            <navigator.Screen options={{ headerShown: false }} name='Map' component={Map} />
            <navigator.Screen options={{}} name='Area' component={Area} />
            <navigator.Screen options={{ headerStyle: {} }} name='Shop' component={Shop} />
            <navigator.Screen options={{ headerStyle: {} }} name='Training' component={Training} />
            {/*  */}
        </navigator.Navigator>
    );
}

export default MapNavigator;