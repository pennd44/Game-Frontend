import React from 'react';
import { SafeAreaView, View, Button, Text, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, signin } from '../../actions'

const Mann = () => {
    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()
    const name = "Penn"
    return (<SafeAreaView>

        <Text style={styles.counter}>Counter {counter}</Text>
        <Button title="-5" onPress={() => dispatch(decrement(5))} />
        <Button title="-1" onPress={() => dispatch(decrement(1))} />
        <Button title="+1" onPress={() => dispatch(increment(1))} />
        <Button title="+5" onPress={() => dispatch(increment(5))} />
        <Button title="Login" onPress={() => dispatch(signin())} />
        {isLogged ?
            <Text style={styles.name}>Name:{name}</Text> : null}
    </SafeAreaView>);
}

const styles = StyleSheet.create({
    name: {
        fontSize: 30,
        color: "red"
    },
    counter: {
        fontSize: 20,
        color: "blue"
    }
})

export default Mann;