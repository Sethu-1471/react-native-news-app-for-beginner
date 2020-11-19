import React from 'react';
import { StatusBar, StyleSheet, ScrollView } from 'react-native';

export default function Screen({ children }) {
    return (
        <ScrollView style={styles.container}>
            { children }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 15,
        backgroundColor: '#f7f3f3',
        flex: 1
    }
})
