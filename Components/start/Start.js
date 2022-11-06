import React from 'react'
import { Button, Dimensions, Image, StyleSheet, Text, View } from 'react-native'

export default function Start(props) {

    const screenWidth = Dimensions.get("screen").width
    const screenHeight = Dimensions.get("screen").height

    return (
        <>
            <View style={{ position: 'absolute', left: screenWidth / 2 - 23, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text
                    style={[
                        styles.text,
                        {
                            fontSize: 30,
                            bottom: screenHeight / 2 - 100,
                        }
                    ]}
                >
                    Dodge
                </Text>
                <Text
                    style={[
                        styles.text,
                        , {
                            fontSize: 25,
                            bottom: screenHeight / 2 - 130,
                        }
                    ]}
                >
                    Boat
                </Text>
                <Image
                    source={{ uri: 'https://cdn.dribbble.com/users/1147279/screenshots/4274111/moving_boat.gif' }}
                    style={{
                        position: 'absolute',
                        height: screenHeight,
                        width: screenWidth,
                        resizeMode: 'cover'
                    }}
                />
                <Button onPress={() => props.setGamePlay(true)} title='PLAY' />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontWeight: "bold",
        position: 'absolute',
        zIndex: 2,
        fontFamily: 'Copperplate Gothic Light',
        letterSpacing: 5
    }
})

