import React from 'react';
import { SafeAreaView, View, Button, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { isBattling, setBattleBg, updateEnemy } from '../../actions';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';


const ArenaEnemy = (props) => {
    let enemy = props.enemy
    let user = useSelector(state => state.user)
    let background = user.map.battle_bg
    let dispatch = useDispatch()
    let weapon = enemy.player_items.find(eitem => eitem.equipped === true && eitem.item.slot === "weapon")
    // try { weapon = user.player_items.find(eitem => user.equipped_items.includes(eitem) && eitem.item.slot === "weapon") } catch { weapon = "huh" }
    let armor = enemy.player_items.find(eitem => eitem.equipped === true && eitem.item.slot === "armor")
    let accessory = enemy.player_items.find(eitem => eitem.equipped === true && eitem.item.slot === "accessory")


    // console.log(background)
    const handleClick = () => {
        dispatch(updateEnemy(enemy))
        dispatch(isBattling(true))
        dispatch(setBattleBg(background))
        props.navigation.navigate('Battle')
    }

    return (<View style={{ flex: 1, alignItems: "center" }}>
        <Card style={{ flex: 1, alignItems: "center", width: 350 }}>
            <TouchableOpacity onPress={() => handleClick()}>
                <Text>{enemy.username}</Text>
                <Image source={{ uri: enemy.avatar }} style={{ width: 200, height: 200 }} />
                <View style={{ flexDirection: "row" }}>
                    <Card style={styles.item}>
                        {weapon ? <Image source={{ uri: weapon.item.image }} style={{ height: 50, width: 50 }} /> : <Text>EMPTY</Text>}
                    </Card>
                    <Card style={styles.item}>
                        {armor ? <Image source={{ uri: armor.item.image }} style={{ height: 50, width: 50 }} /> : <Text>EMPTY</Text>}
                    </Card>
                    <Card style={styles.item}>
                        {accessory ? <Image source={{ uri: accessory.item.image }} style={{ height: 50, width: 50 }} /> : <Text>EMPTY</Text>}
                    </Card>
                </View>
            </TouchableOpacity>
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

export default ArenaEnemy;