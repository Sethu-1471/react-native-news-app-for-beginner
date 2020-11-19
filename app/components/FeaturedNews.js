import React from 'react'
import { View, Text } from 'react-native'
import BlockCard from './BlockCard'

export default function FeaturedNews({ item }) {
    return <BlockCard item={item} style={{ marginVertical: 15 }} />
}
