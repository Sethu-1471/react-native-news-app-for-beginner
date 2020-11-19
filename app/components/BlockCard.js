import React, {useState} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import Title from './Title'
import SubTitle from './SubTitle'

export default function BlockCard({ style, imageStyle, item }) {
    const { thumbnail, desc, title } = item;
    
    return (
        <View style={[styles.container, style]}>
            <Image source={{ uri: thumbnail ? thumbnail : "http://192.168.8.104:3000/1596258886460-tv.jpg" }} style={[styles.image, imageStyle]} />
            <View style={styles.contentContainer}>
                <Title> { title } </Title>
                <SubTitle> { desc } </SubTitle>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white'
    },
    image: {
        width: '100%',
        height: 200
    },
    contentContainer: {
        padding: 5,

    }
})
