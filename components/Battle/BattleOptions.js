import React from 'react';
import { View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import { renderers } from 'react-native-popup-menu';
import { fetchEnemies, isBattling, setUser, updateEnemy } from '../../actions';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { default as F5Icon } from 'react-native-vector-icons/FontAwesome5';
import { default as OIcon } from 'react-native-vector-icons/Octicons';
import { default as FIcon } from 'react-native-vector-icons/FontAwesome';


const { SlideInMenu } = renderers;


const BattleOptions = (props) => {
    let ip = "192.168.1.227:3000"
    // let ip = "10.0.0.97:3000"
    let user = useSelector(state => state.user)
    let enemy = useSelector(state => state.enemy)
    let dispatch = useDispatch()
    let battling = useSelector(state => state.isBattling)

    async function endbattle(result) {
        res = await fetch(`http://${ip}/api/v1/players/${user.id}/${result}battle/${enemy.id}`,
            {
                method: "PATCH",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    player: {
                        current_health: user.current_health
                    }
                })
            })
        res.json()
            .then(player => dispatch(setUser(player)))




    }

    async function updateUser() {
        res = await fetch(`http://${ip}/api/v1/players/${user.id}`,
            {
                method: "PATCH",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    player: {
                        current_health: user.current_health
                    }
                })
            }
        )
        res.json()
            .then(player => dispatch(setUser(player)))

    }

    function goBack() {
        props.navigation.navigate('Arena')
    }

    function getattacked() {
        if (enemy.attack - user.defense > 0) {
            user.current_health -= (enemy.attack - user.defense)
        }
        dispatch(setUser(user))
    }
    function attack() {
        console.log("ATTACK:", enemy.current_health -= (user.attack - enemy.defense))
        console.log("STATS:", user.adjusted_stats.attack - enemy.defense)
        if (user.attack - enemy.defense < enemy.current_health) {
            enemy.current_health -= (user.adjusted_stats.attack - enemy.defense)
        } else { enemy.current_health = 0 }
        dispatch(updateEnemy(enemy))
        if (enemy.current_health === 0) {
            endbattle("win")
            updateUser()
            dispatch(isBattling(false))
        }
        // console.log(enemy.current_health)
        if (enemy.current_health > 0) {
            setTimeout(() => getattacked(), 1000)
        }
        if (user.current_health === 0) {
            endbattle("lose")
            updateUser()
            dispatch(isBattling(false))
        }
        // user.current_health = user.max_health
        // setTimeout(() => dispatch(setUser(user)), 1500)
    }
    return (
        <View>{battling ? <Footer>
            <FooterTab>
                <Button block danger onPress={() => attack()}><Text style={{ color: "white" }}><Icon name='sword' /> ATTACK</Text></Button>
            </FooterTab>
            <FooterTab>
                <Button block primary iconLeft>
                    <Menu renderer={SlideInMenu} name="options">
                        <MenuTrigger><Text style={{ color: "white" }}><FIcon name='magic' /> SKILLS</Text></MenuTrigger>
                        <MenuOptions>
                            {user.player_skills.map(skill =>
                                <MenuOption onSelect={null}>
                                    <Text>{skill.skill.name}</Text>
                                </MenuOption>)}
                            <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
                        </MenuOptions>
                    </Menu>
                </Button>
            </FooterTab>
            <FooterTab>
                <Button block success iconLeft>
                    <Menu renderer={SlideInMenu}>
                        <MenuTrigger><Text style={{ color: "white" }}><OIcon name='beaker' /> ITEMS</Text></MenuTrigger>
                        <MenuOptions>
                            {user.player_items.map(item => <MenuOption text={item.item.name} />)}
                            <MenuOption onSelect={() => alert(`Save`)} text='Save' />
                            <MenuOption onSelect={() => alert(`Delete`)} >
                                <Text style={{ color: 'red' }}>Delete</Text>
                            </MenuOption>
                            <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
                        </MenuOptions>
                    </Menu>
                </Button>
            </FooterTab>
            <FooterTab>
                <Button block warning><Text style={{ color: "white" }}> <F5Icon name='running' /> RUN</Text></Button>

            </FooterTab>
        </Footer> : <View>
                {enemy.current_health === 0 ? <Text>You won! You earned ${enemy.win_money}</Text> : <Text>You lost. You lost ${enemy.loss_money}</Text>}
                <Footer>
                    <FooterTab>
                        <Button block onPress={() => goBack()}><Text>Go Back</Text></Button>
                    </FooterTab>
                </Footer>
            </View>}
        </View>

    )
}

export default BattleOptions;