import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native'
import { logout } from '../../../actions'
import { useDispatch } from 'react-redux'
import { Button, Text } from "native-base";


const Settings = (props) => {
    const dispatch = useDispatch()
    return (<SafeAreaView>
        <Button full danger onPress={() => dispatch(logout())}><Text style={{ color: "white", fontSize: 20 }}>Logout</Text></Button>
    </SafeAreaView>);
}

export default Settings;