import React, { useEffect } from 'react';
import { SafeAreaView, View, Button, Text, StyleSheet, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux'
import { fetchEnemies } from '../../actions'
import ArenaEnemy from './ArenaEnemy'


// let url = 'http://10.0.0.97:3000/api/v1/enemies'

const Arena = (props) => {
    let ip = "192.168.1.227:3000"
    // let ip = "10.0.0.97:3000"
    let dispatch = useDispatch()
    async function fetchUsers() {
        res = await fetch('http://' + ip + '/api/v1/players')
        res.json()
            .then(players => dispatch(fetchEnemies(players)))
    }

    useEffect(() => { fetchUsers }, [])
    const enemies = useSelector(state => state.enemies)
    console.log(props.navigation)
    return (<SafeAreaView>
        {/* <ImageBackground style={styles.background} source={{ uri: "https://cdnb.artstation.com/p/assets/images/images/007/554/577/large/grace-liu-bc-bg-arena.jpg?1506953185" }}> */}
        <ScrollView>
            {enemies.map(enemy =>
                <ArenaEnemy navigation={props.navigation} enemy={enemy} key={enemy.id} />)}

        </ScrollView>

        {/* </ImageBackground> */}
    </SafeAreaView>);
}
const styles = StyleSheet.create({

    background: {
        flex: 1,
        resizeMode: "cover",
        // justifyContent: "center"
    }

});

export default Arena;