import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import SmallCard from './SmallCard'
import Title from './Title'

export default function HorizontalNews({ title, data }) {
    return( <View>
        <Title size={20}> {title} </Title>
        <View style={styles.listStyle}>
        <FlatList data={data} keyExtractor={item => item.id} horizontal showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <SmallCard item={item} /> }    />
        </View>  
    </View>)
}

const styles = StyleSheet.create({
    listStyle: {
        marginVertical: 15
    }
})
