import React from 'react'
import { View, Text } from 'react-native'
import HorizontalNews from './HorizontalNews'

export default function TechNews({ data }) {
    return <HorizontalNews title='Tech-News' data={data} />
}
