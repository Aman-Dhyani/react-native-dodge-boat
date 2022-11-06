import { useCallback } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming } from 'react-native-reanimated';
import image from '../Controls/handle.json'


export default function Controls(props) {

    const rotation = useSharedValue(0);
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotateZ: `${rotation.value}deg` }],
        };
    });

    return (
        <>
            <View id='handle' style={styles.handle}>
                <Animated.Image
                    source={{ uri: image.pic }}
                    style={[styles.box, animatedStyle]}
                />

                <TouchableOpacity onPress={() => props.dispatch({ type: 'left' }) || (rotation.value = withRepeat(withTiming(-20), 2, true))} style={styles.buttons} />
                <TouchableOpacity onPress={() => props.dispatch({ type: 'right' }) || (rotation.value = withRepeat(withTiming(20), 2, true))} style={styles.buttons} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    handle: {
        height: 120,
        width: '100%',
        position: 'absolute',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        bottom: 0,
        backgroundColor: 'black',
    },
    box: {
        position: 'absolute',
        height: 200,
        width: 200,
    },
    buttons: {
        position: 'relative',
        marginHorizontal: 10,
        height: 80,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0
    }
});
