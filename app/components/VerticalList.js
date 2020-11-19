import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FlatCard from './FlatCard'
import Title from './Title'

export default function VerticalList({ title, data }) {
    return (
        <View>
            <Title size={20}> {title} </Title>
            <View style={styles.contanier}>
            {data ? data.map(data => <FlatCard item={data} key={data.id} />) : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contanier: {
        marginVertical: 15
    }
})

