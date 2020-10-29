import React from 'react';
import { SafeAreaView, View, Button, Text, StyleSheet, ImageBackground } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import MapArea from './MapArea'
// import { createStackNavigator } from '@react-navigation/stack'
// import Area from './Area'

// const navigator = createStackNavigator()

const Map = (props) => {
    let map = useSelector(state => state.user.map)
    let bg = map.image
    return (
        <ImageBackground source={{ uri: bg }} style={styles.background}>
            <SafeAreaView>
                <Text>Map</Text>
                {map.areas.map(area => <MapArea area={area} navigation={props.navigation} />)}
                {/* <Button title="Go to Area" onPress={() => props.navigation.navigate('Area')} /> */}
            </SafeAreaView>
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
export default Map;