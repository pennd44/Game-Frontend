import React from 'react';
import { SafeAreaView, Text } from 'react-native'

const Training = (props) => {
    const { areaSkills } = props.route.params;
    console.log(areaSkills)
    return (<SafeAreaView>
        {areaSkills.map(areaSkill => <Text>{areaSkill.skill.name}</Text>)}
    </SafeAreaView>)
}
export default Training