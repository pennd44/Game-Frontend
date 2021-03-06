import React, { useState } from 'react';
import { SafeAreaView, View, Button, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useDispatch } from 'react-redux'
import { setUser } from '../../../actions'


const CharacterCard = (props) => {
    let dispatch = useDispatch()
    let avatar = (props.character.image)
    async function createAccount() {
        const res = await fetch('http://10.0.0.92:3000/api/v1/players', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                player: {
                    username: props.username,
                    password: props.password,
                    avatar: avatar
                }
            })
        })
        res.json()
            .then(newUser => dispatch(setUser(newUser)))


    }
    let image = props.character.image

    return (
        <TouchableOpacity onPress={() => createAccount()}>
            <Text>{props.character.name}</Text>
            <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        </TouchableOpacity>
    );
}

export default CharacterCard;