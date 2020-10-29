import React from 'react';
import { SafeAreaView, View, StyleSheet, ImageBackground } from 'react-native'
import { useSelector } from 'react-redux';
import BattleOptions from './Battle/BattleOptions';
import EntityCard from './Battle/EntityCard';
import HealthBar from './HealthBar'
// import EnergyBar from './Header/EnergyBar'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

const Battle = (props) => {
    let enemy = useSelector(state => state.enemy)


    let background = useSelector(state => state.battlebg)
    let user = useSelector(state => state.user)
    return (
        <Container>
            <ImageBackground source={{ uri: background }} style={styles.background}>
                {/* <Header>

                <Text>Battle</Text>
            </Header> */}
                <Content>
                    {/* <View></View> */}
                    <EntityCard entity={user} />
                    <EntityCard entity={enemy} />

                </Content>

                <BattleOptions
                    navigation={props.navigation}
                // enemy={enemy} 
                />
            </ImageBackground>
        </Container>);
}
const styles = StyleSheet.create({

    background: {
        flex: 1,
        resizeMode: "cover",
        // justifyContent: "center"
    }

});

export default Battle;