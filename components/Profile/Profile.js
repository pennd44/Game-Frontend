import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, ImageBackground } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Header, Content, Card, CardItem, Text, Body, Button, Right, Left, Accordion } from "native-base";
import EquippedItems from './EquippedItems';
import Icon from 'react-native-vector-icons/AntDesign';
import HealthBar from '../HealthBar'
import EnergyBar from '../EnergyBar';
import { default as MIcon } from 'react-native-vector-icons/MaterialCommunityIcons';
import OtherOptions from './OtherOptions';


const Profile = (props) => {
    let currentUser = useSelector(state => state.user)
    let image = currentUser.avatar
    // console.log(usermap)

    let bg = currentUser.map.player_bg
    console.log(currentUser.equipped_items)
    return (
        <Container>
            <ImageBackground source={{ uri: bg }} style={styles.image}>
                <Header transparent>
                    {/* <Text>{currentUser.username}'s Profile</Text> */}
                    {/* <Text>Health:{currentUser.current_health}/{currentUser.max_health}</Text> */}
                    <Body>
                        <View>
                            <Text style={styles.title}>{currentUser.username}'s Profile</Text>
                            <HealthBar entity={currentUser} />
                            <EnergyBar entity={currentUser} />
                        </View>
                    </Body>
                    {/* <Text>Energy:{currentUser.current_energy}/{currentUser.max_energy}</Text> */}
                    <Right>
                        <Icon name='setting' size={30} onPress={() => props.navigation.navigate('Settings')} />
                    </Right>
                </Header>
                <View style={styles.content}>
                    <Text>${currentUser.money}</Text>
                    <View style={styles.stats}>
                        <View style={{ flex: 1 }}>
                            <OtherOptions />
                        </View>
                        <View style={styles.middle}>
                            <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                            <View style={styles.stats}>
                                <Text><MIcon name="sword" />{currentUser.attack} </Text>
                                <Text><MIcon name="shield-half-full" />{currentUser.defense} </Text>
                                <Text><MIcon name='run' />{currentUser.speed}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <EquippedItems />
                        </View>
                    </View>
                    <Button full onPress={() => props.navigation.navigate('Inventory')}><Text>Inventory</Text></Button>
                </View>
            </ImageBackground>
        </Container>
    )
}

const styles = StyleSheet.create({

    image: {
        flex: 1,
        resizeMode: "cover",
        // justifyContent: "center"
    },
    stats: {
        flexDirection: "row",
        justifyContent: "center"
    },
    middle: {
        justifyContent: "space-around",

    },
    content: {
        flex: 1,
        // justifyContent: "center"
        // alignContent: "centifyContenter"
    },
    title: {
        fontSize: 20,
        // color: "white"
    }

});

export default Profile;