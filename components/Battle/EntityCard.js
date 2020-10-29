import React from 'react';
import { View, Image, Text } from 'react-native'
import HealthBar from '../HealthBar';

const EntityCard = (props) => {
    let entity = props.entity
    return (<View>
        <Text>{entity.username ? entity.username : entity.name}</Text>
        <HealthBar entity={entity} />
        <Image source={{ uri: entity.avatar }} style={{ width: 200, height: 200 }} />
    </View>);
}

export default EntityCard;