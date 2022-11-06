import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';

export default function Boat(props) {

    const [headLights, setLights] = useState('aqua')

    useEffect(() => {
        setTimeout(() => {
            headLights === 'aqua' ? setLights('white') : setLights('aqua')
        }, 1000);
    }, [headLights])

    return (
        <>
            <Animated.View style={
                [
                    {
                        bottom: props.boatBottom,
                        left: props.boatLeft,
                    },
                    styles.mainBoat,
                    props.boatAnimation
                ]
            }>
                <View style={styles.pentagonInner} >
                    <View style={[styles.pentagonInnerLights, { backgroundColor: headLights, left: 2, shadowColor: headLights, }]} />
                    <View style={[styles.pentagonInnerLights, { backgroundColor: headLights, left: 22, shadowColor: headLights, }]} />
                    <View style={styles.pentagonInnerRoof} />
                </View>

                <View style={styles.pentagonBefore} >
                    <View style={[styles.backLights, { backgroundColor: headLights, left: -30, shadowColor: headLights, }]}></View>
                    <View style={[styles.backLights, { backgroundColor: headLights, left: 22, shadowColor: headLights, }]}></View>
                </View>
            </Animated.View>
        </>
    )
}

const styles = StyleSheet.create({
    mainBoat: {
        width: 55,
        height: 75,
        position: 'absolute',
        zIndex: 1,
    },
    pentagonInner: {
        width: 70,
        borderBottomColor: "red",
        borderBottomWidth: 0,
        borderLeftColor: "transparent",
        borderLeftWidth: 18,
        borderRightColor: "transparent",
        borderRightWidth: 18,
        borderTopColor: "red",
        borderTopWidth: 50,
        position: 'absolute',
        bottom: 0,
        left: -8,
    },
    pentagonInnerLights: {
        position: 'absolute',
        height: 10, width: 10,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
    },
    pentagonInnerRoof: {
        backgroundColor: 'yellow',
        position: 'absolute',
        bottom: 10, left: 2,
        height: 30, width: 30,
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
    },
    backLights: {
        position: 'absolute', bottom: -28,
        height: 10, width: 10, borderRadius: 50,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
    },
    pentagonBefore: {
        position: "absolute",
        height: 0,
        width: 0,
        top: -8,
        left: -9,
        borderStyle: "solid",
        borderBottomColor: "red",
        borderBottomWidth: 35,
        borderLeftColor: "transparent",
        borderLeftWidth: 36,
        borderRightColor: "transparent",
        borderRightWidth: 36,
        borderTopWidth: 0,
        borderTopColor: "transparent",
    },
});
