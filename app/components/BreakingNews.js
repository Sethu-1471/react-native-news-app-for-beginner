import React from 'react'
import { View, Text } from 'react-native'
import HorizontalNews from './HorizontalNews'

export default function BreakingNews({ data }) {
    return <HorizontalNews title='Breaking-News' data={data} />
}
