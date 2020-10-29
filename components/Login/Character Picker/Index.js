import React from 'react';
import { SafeAreaView, View, Button, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import CharacterCard from './CharacterCard'


let characters = [
    { name: "Moost", image: "https://vignette.wikia.nocookie.net/epicpetwars/images/7/74/Moost.png/revision/latest?cb=20100322180545" },
    { name: "Gpysdrop", image: "https://vignette.wikia.nocookie.net/epicpetwars/images/8/84/Gpysdrop.png/revision/latest?cb=20100319200914" },
    { name: "Bombidable", image: "https://vignette.wikia.nocookie.net/epicpetwars/images/f/f8/Bombidable.png/revision/latest?cb=20100319224940" },
    { name: "Haibot", image: "https://vignette.wikia.nocookie.net/epicpetwars/images/6/67/Haibot.png/revision/latest?cb=20100322180108" },
    { name: "Humabear", image: "https://vignette.wikia.nocookie.net/epicpetwars/images/0/00/Humabear.png/revision/latest?cb=20100322192221" },
    { name: "Magusbat", image: "https://vignette.wikia.nocookie.net/epicpetwars/images/0/00/Magusbat.png/revision/latest?cb=20100322180324" },
    { name: "Lazershark", image: "https://vignette.wikia.nocookie.net/epicpetwars/images/6/6a/Lazer_Shark.png/revision/latest?cb=20100319224214" },
    { name: "Turk", image: "https://vignette.wikia.nocookie.net/epicpetwars/images/0/0a/Turk.png/revision/latest?cb=20100319201317" },
]
const CharacterPicker = (props) => {
    const { username, password } = props.route.params;
    return (<SafeAreaView>
        <Text>Character Picker</Text>
        <ScrollView>
            {characters.map(character => <CharacterCard character={character} username={username} password={password} />)}

        </ScrollView>
    </SafeAreaView>);
}

export default CharacterPicker;