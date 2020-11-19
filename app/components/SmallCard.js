import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import BlockCard from './BlockCard'
 
const { width }= Dimensions.get('window')

export default function SmallCard({ item }) {
    return <BlockCard style={styles.container} imageStyle={styles.image} item={item} />
}

const styles = StyleSheet.create({
    container: {
        width: width / 2,
        marginRight: 15,
        height: 200
    },
    image: {
        height: 100
    }
})
