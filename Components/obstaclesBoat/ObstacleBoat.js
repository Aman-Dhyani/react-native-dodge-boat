import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function ObstacleBoat({ randomLeft, color, obstacleBottom, gap, obstacleWidth, obstacleHeight }) {

    return (
        <>
            <View style={[styles.obstacleStyle, {
                backgroundColor: color,
                width: obstacleWidth,
                height: obstacleHeight,
                left: randomLeft + obstacleHeight + gap,
                bottom: obstacleBottom,
            }]} />

            <View style={[styles.obstacleStyle, {
                backgroundColor: color,
                width: obstacleWidth,
                height: obstacleHeight,
                left: randomLeft,
                bottom: obstacleBottom,

            }]} />
        </>
    )
}

const styles = StyleSheet.create({
    obstacleStyle: {
        position: 'absolute',
        borderWidth: 1,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
    }
})