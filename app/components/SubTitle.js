import React from 'react'
import { Text } from 'react-native'

export default function Title({ children, numberOfLines=2, size= 15 }) {
    return <Text numberOfLines={numberOfLines} style={{ fontWeight: 'bold', fontSize: size  }} > { children } </Text>
}
