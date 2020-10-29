import React from 'react';
import { SafeAreaView, View, StyleSheet, ImageBackground, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { isBattling, setUser, updateEnemy } from '../../actions'
import { Container, Header, Content, Card, CardItem, Text, Body, Button } from "native-base";


const Area = (props) => {
    let dispatch = useDispatch()
    const { area } = props.route.params;
    let userId = useSelector(state => state.user.id)
    let enemies = useSelector(state => state.enemies)

    const toBattle = (job) => {
        let enemy = job.enemy
        // console.log(job)
        let background = job.battle_bg
        dispatch(updateEnemy(enemy))
        dispatch(isBattling(true))
        props.navigation.navigate('Battle', { background: background })
    }
    async function dojob(id) {
        res = await fetch(`http://10.0.0.92:3000/api/v1/players/${userId}/dojob/${id}`)
            .then(res => res.json())
            .then(user => dispatch(setUser(user)))
    }
    return (
        <Container>
            <ImageBackground source={{ uri: area.background }} style={styles.background}>
                <Header />
                <Content >
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "white", fontSize: 30 }}>{area.name}</Text>
                        <Image source={{ uri: area.avatar }} style={{ width: 200, height: 200 }} />
                        {area.jobs.map(job => <Button style={styles.button} full dark onPress={() => {
                            dojob(job.id);
                            job.enemy ? toBattle(job) : null
                        }}><Text>{job.name}</Text></Button>)}
                        {area.area_items ? <Button style={styles.button} full dark onPress={() => props.navigation.navigate('Shop', { areaItems: area.area_items })}><Text>Shop</Text></Button> : null}
                        {area.area_skills ? <Button style={styles.button} full dark onPress={() => props.navigation.navigate('Training', { areaSkills: area.area_skills })}><Text>Train</Text></Button> : null}
                        {/* <Button title="Battle" onPress={() => props.navigation.navigate('Battle')} /> */}
                    </View>
                </Content>
            </ImageBackground>
        </Container >);
}
const styles = StyleSheet.create({

    background: {
        flex: 1,
        resizeMode: "cover",
        // justifyContent: "center"
    },
    button: {
        margin: 10
    }

});

export default Area;