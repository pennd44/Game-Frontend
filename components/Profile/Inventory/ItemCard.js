import React from 'react';
import { SafeAreaView, View, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, Content, Card, CardItem, Text, Body, Button } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../actions';


const ItemCard = (props) => {
    let ip = "192.168.1.227:3000"
    // let ip = "10.0.0.97:3000"
    let dispatch = useDispatch()
    let user = useSelector(state => state.user)
    async function equip(item) {
        res = await fetch(`http://${ip}/api/v1/players/${user.id}/equip/${item.id}`)
        res.json()
            .then(user => dispatch(setUser(user)))
    }
    async function unequip(item) {
        res = await fetch(`http://${ip}/api/v1/players/${user.id}/unequip/${item.id}`)
        res.json()
            .then(user => dispatch(setUser(user)))
    }

    const equipItem = (pitem) => {
        pitem.equipped ? unequip(pitem) : equip(pitem)
    }
    return (<SafeAreaView>
        <TouchableOpacity onPress={() => equipItem(props.item)}><Card>
            <Text>{props.item.item.name}</Text><Image source={{ uri: props.item.item.image }} style={{ height: 50, width: 50 }} />
            {props.item.equipped ? <Text>Unequip</Text> : <Text>Equip</Text>}

        </Card>
        </TouchableOpacity>
    </SafeAreaView>);
}

export default ItemCard