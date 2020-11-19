import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import Title from './Title'
import SubTitle from './SubTitle'

export default function FlatCard({ item }) {
    const { thumbnail, desc, title } = item;
    return (
        <View style={styles.container}>
            <Image source={{ uri: thumbnail }} style={styles.image} />
            <View style={styles.contentContainer}>
                <Title> { title } </Title>
                <SubTitle> { desc } </SubTitle>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 10,
        height: 80
    },
    image: {
        flex: 0.35,
        height: '100%'
    },
    contentContainer: {
        flex: 0.65,
        paddingHorizontal: 5
    }
})
