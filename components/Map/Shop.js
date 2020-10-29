import React from 'react';
import { View, ImageBackground, StyleSheet, Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../actions';

const Shop = (props) => {
    let user = useSelector(state => state.user)
    let dispatch = useDispatch()
    const { areaItems } = props.route.params;
    // console.log(areaItems)
    async function purchase(item) {
        res = await fetch(`http://10.0.0.92:3000/api/v1/players/${user.id}/obtainitem/${item.id}`)
        res.json()
            .then(player => dispatch(setUser(player)))
    }
    async function updateMoney(item) {
        res = await fetch(`http://10.0.0.92:3000/api/v1/players/${user.id}`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                player: {
                    money: user.money - item.price
                }
            })
        })
        res.json()
            .then(player => dispatch(setUser(player)))
    }
    const buyItem = (aitem) => {
        if (user.money > aitem.price) {
            purchase(aitem.item)
            updateMoney(aitem)
        }
    }


    return (
        <ImageBackground source={{ uri: "https://64.media.tumblr.com/tumblr_mbue4rGtk31rhztfto1_1280.png" }} style={styles.background}>
            <Header transparent />
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ flexDirection: "row", flexWrap: 'wrap', marginLeft: 20 }}>
                    {areaItems.map(areaItem => <TouchableOpacity onPress={() => buyItem(areaItem)}><Card style={{ height: 90, width: 90, justifyContent: "center", alignItems: "center" }}><Image source={{ uri: areaItem.item.image }} style={{ height: 50, width: 50 }} /><Text>{areaItem.item.name}</Text></Card></TouchableOpacity>)}
                </View>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({

    background: {
        flex: 1,
        resizeMode: "cover",
        // justifyContent: "center"
    }

});

export default Shop;