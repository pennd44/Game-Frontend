import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import EnergyBar from '../EnergyBar';
import HealthBar from '../HealthBar';

const Header = (props) => {
    let user = useSelector(state => state.user)
    return (<SafeAreaView>
        <HealthBar entity={user} />
        <EnergyBar entity={user} />
        <Text>Money:${user.money}</Text>
    </SafeAreaView>);
}

export default Header;