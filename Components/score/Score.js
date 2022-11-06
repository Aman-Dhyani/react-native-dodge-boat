import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Score(props) {
    return (
        <>
            <View style={styles.score}>
                <Text style={styles.fonter}>Score: {props.score}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    score: {
        position: 'absolute',
        top: 0,
        zIndex: 3,
        width: '100%',
        backgroundColor: 'black',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:5

    },
    fonter: {
        color: 'yellow',
        fontSize:20,
    }
})