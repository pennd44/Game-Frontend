import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { default as MIcon } from 'react-native-vector-icons/Foundation';

// const slots = ["weapon", "armor", "accessory"]

const OtherOptions = (props) => {
    return (<View>
        <Card style={styles.item}>
            <Icon name='user-friends' />
            <Text>FRIENDS</Text>
        </Card>
        <Card style={styles.item}>
            <MIcon name='list-number' />
            <Text>BOARDS</Text>
        </Card>
        <Card style={styles.item}>
            <Text>OTHER</Text>
        </Card>

    </View>);
}

const styles = StyleSheet.create({
    item: {
        height: 70,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default OtherOptions;