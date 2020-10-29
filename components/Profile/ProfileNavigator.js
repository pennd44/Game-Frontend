import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Profile from './Profile'
import Settings from './Settings/Settings'
import Inventory from './Inventory/InventoryContainer'


const navigator = createStackNavigator()

const ProfileNavigator = (props) => {
    return (

        <navigator.Navigator
        // screenOptions={{headerShown: false}}
        >
            <navigator.Screen options={{ headerShown: false }} name='Profile' component={Profile} />
            <navigator.Screen options={{}} name='Settings' component={Settings} />
            <navigator.Screen options={{ headerStyle: {} }} name='Inventory' component={Inventory} />


        </navigator.Navigator>
    );
}

export default ProfileNavigator;