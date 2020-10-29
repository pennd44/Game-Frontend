import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'


const MapArea = (props) => {
    let area = props.area
    // console.log(area.map_image)
    return (<TouchableOpacity onPress={() => props.navigation.navigate('Area', { area: area })} >
        <Image source={{ uri: area.map_image }} style={{ width: 200, height: 200 }} />
    </TouchableOpacity >
    )
}

export default MapArea;