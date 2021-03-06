import React, { useState } from 'react';
import { SafeAreaView, View, Button, Text, StyleSheet, TextInput } from 'react-native'
import { setUser, logout } from '../../actions'
import { useDispatch } from 'react-redux'




const Login = (props) => {
    let [username, changeUsername] = useState('')
    let [password, changePassword] = useState('')
    const dispatch = useDispatch()

    async function fetchUser(username, password) {
        const res = await fetch('http://10.0.0.92:3000/api/v1/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password,
            })
        })
        res.json()
            .then(user => {
                console.log(user)
                user.player ?
                    dispatch(setUser(user.player))
                    : null
            }
            )
    }


    return (<SafeAreaView>
        <Text>Login</Text>
        <Text>Username:</Text>
        <TextInput name="username" value={username} onChangeText={(text) => changeUsername(text)} style={{ borderWidth: 1 }} />
        <Text>Password:</Text>
        <TextInput name="password" value={password} onChangeText={(text) => changePassword(text)} style={{ borderWidth: 1 }} />
        <Button title="Submit" onPress={() => fetchUser(username, password)} />
        <Text>Don't have an account?</Text>
        <Button title="Sign-up" onPress={() => props.navigation.navigate('Signup')} />
        {/* <Button title="hi" onPress={() => dispatch(logout())} /> */}
    </SafeAreaView>);
}

export default Login;