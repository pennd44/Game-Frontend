import React from 'react';
import { View, StyleSheet, Image } from 'react-native'
import { useSelector } from 'react-redux';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';

// const slots = ["weapon", "armor", "accessory"]

const EquippedItems = (props) => {
    let user = useSelector(state => state.user)
    let weapon = user.player_items.find(eitem => eitem.equipped === true && eitem.item.slot === "weapon")
    // try { weapon = user.player_items.find(eitem => user.equipped_items.includes(eitem) && eitem.item.slot === "weapon") } catch { weapon = "huh" }
    let armor = user.player_items.find(eitem => eitem.equipped === true && eitem.item.slot === "armor")
    let accessory = user.player_items.find(eitem => eitem.equipped === true && eitem.item.slot === "accessory")

    console.log(user.player_items.find(eitem => eitem.equipped === true && eitem.item.slot === "weapon"))
    // console.log(user.equipped_items)
    return (<View>
        {/* <Text>Equipment:</Text> */}
        <Card style={styles.item}>
            {weapon ? <Image source={{ uri: weapon.item.image }} style={{ height: 50, width: 50 }} /> : <Text>EMPTY</Text>}
        </Card>
        <Card style={styles.item}>
            {armor ? <Image source={{ uri: armor.item.image }} style={{ height: 50, width: 50 }} /> : <Text>EMPTY</Text>}
        </Card>
        <Card style={styles.item}>
            {accessory ? <Image source={{ uri: accessory.item.image }} style={{ height: 50, width: 50 }} /> : <Text>EMPTY</Text>}
        </Card>

    </View>);
}

const styles = StyleSheet.create({
    item: {
        height: 70,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default EquippedItems;