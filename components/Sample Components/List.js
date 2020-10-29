import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native'

const List = () => {
    const items = [
        { item: 1 },
        { item: 2 },
        { item: 3 },
        { item: 4 },
        { item: 5 },
        { item: 6 },
        { item: 7 },
        { item: 8 }
    ]
    return (<SafeAreaView>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(d) => String(d.item)}
            data={items}
            renderItem={({ item }) => {
                return <Text style={styles.listText}>{item.item}</Text>
            }}
        />
    </SafeAreaView>);
}

const styles = StyleSheet.create({
    listText: {
        marginHorizontal: 50,
    }
})

export default List;