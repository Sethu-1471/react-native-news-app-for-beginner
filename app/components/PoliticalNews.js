import React from 'react'
import { View, Text } from 'react-native'
import VerticalList from './VerticalList'

export default function PoliticalNews({ data }) {
    return <VerticalList title="political news" data={data} />
}
