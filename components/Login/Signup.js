import React, { useState } from 'react';
import { SafeAreaView, View, Button, Text, StyleSheet, TextInput } from 'react-native'


const Signup = (props) => {
    let [username, changeUsername] = useState('')
    let [password, changePassword] = useState('')
    return (<SafeAreaView>
        <Text>Signup</Text>
        <Text>Username:</Text>
        <TextInput name="username" value={username} onChangeText={(text) => changeUsername(text)} style={{ borderWidth: 1 }} />
        <Text>Password:</Text>
        <TextInput name="password" value={password} onChangeText={(text) => changePassword(text)} style={{ borderWidth: 1 }} />
        {username.length > 0 && password.length > 0 ?
            <Button title="Submit" onPress={() => props.navigation.navigate('Choose a Character', {
                username: username,
                password: password
            })} /> : null}
    </SafeAreaView>);
}

export default Signup;