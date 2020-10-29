import React from 'react';
import { SafeAreaView, View, Button, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux';
import ItemCard from './ItemCard'


const InventoryContainer = (props) => {
    let user = useSelector(state => state.user)
    return (<SafeAreaView style={{ flexDirection: "row" }}>
        {user.player_items.map(pitem => <ItemCard item={pitem} />)}
    </SafeAreaView>);
}

export default InventoryContainer