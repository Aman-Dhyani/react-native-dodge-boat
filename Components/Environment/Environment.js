import React, { useCallback, useEffect, useState, useReducer } from 'react';
import { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { Dimensions } from 'react-native';
import ObstacleBoat from '../obstaclesBoat/ObstacleBoat';
import Controls from '../Controls/Controls';
import Score from '../score/Score';
import Boat from '../Boat/Boat';

export default function Environment(props) {

    // ---------- screen ratio ----------
    const screenWidth = Dimensions.get("screen").width
    const screenHeight = Dimensions.get("screen").height

    // ---------- obstacle mechanics -----------
    const [obstacleBottom, setObstacleBottom] = useState(screenHeight)
    const [obstacleBottom2, setObstacleBottom2] = useState(screenHeight + 350)

    const [obstaclesNegWidth, setObstaclesNegWidth] = useState(0)
    const [obstaclesNegWidthTwo, setObstaclesNegWidthTwo] = useState(10)

    let obstacleBottomTimer;
    let obstacleBottomTimer2;
    let obstacleWidth = screenWidth / 2
    const obstacleHeight = 40
    const [gap, setGap] = useState(screenWidth / 2 + 30)

    // ------------------ scoring --------------------
    const [score, updateScore] = useState(0)

    // ---------------- boat axises ---------------
    const [boatLeft, updateBoatDirection] = useState(screenWidth / 2 - 25)
    const controlsLeft = screenWidth / 2
    const boatBottom = 180

    // ------------ boat controls reducer -----------
    const reducer = useCallback((state, action) => {
        if (action.type === 'left') updateBoatDirection(boatLeft - 10)
        if (action.type === 'right') updateBoatDirection(boatLeft + 10)
    })

    const [state, dispatch] = useReducer(reducer, 0)

    // --------------- boat move animation -----------------
    const boatAnimation = useAnimatedStyle(() => {
        return {
            left: withSpring(boatLeft),
        };
    })

    // ----------------- obstacle incoming -----------------
    useEffect(() => {
        if (obstacleBottom > -obstacleHeight + 100) {
            obstacleBottomTimer = setInterval(() => {
                setObstacleBottom(obstacleBottom => obstacleBottom - 5)
            }, speed);
            return () => {
                clearInterval(obstacleBottomTimer)
            }
        }
        else {
            setObstacleBottom(screenHeight + 100)
            setObstaclesNegWidth(Math.floor(Math.random() * 10) + (- 30))
            scoreCounter()
        }
    }, [obstacleBottom])

    // ----------------- obstacle2 incoming ----------------
    useEffect(() => {
        if (obstacleBottom2 > -obstacleHeight + 100) {
            obstacleBottomTimer2 = setInterval(() => {
                setObstacleBottom2(obstacleBottom2 => obstacleBottom2 - 5)
            }, speed);
            return () => {
                clearInterval(obstacleBottomTimer2)
            }
        }
        else {
            setObstacleBottom2(screenHeight + 100)
            setObstaclesNegWidthTwo(Math.floor(Math.random() * 40) + (- 70))
            scoreCounter()
        }
    }, [obstacleBottom2])

    // ------------------ score counter ---------------------
    const scoreCounter = useCallback(() => {
        updateScore(score + 1)
    })

    // --------------------- game speed ----------------------
    const [speed, updateSpeed] = useState(30)

    useEffect(() => {
        if (score > 10) {
            updateSpeed(20)
            setGap(screenWidth / 2 + 30)
        }
        if (score > 20) {
            updateSpeed(15)
            setGap(screenWidth / 2 + 25)
            setGap(screenWidth / 2 + 28)
        }
        if (score > 30) {
            updateSpeed(10)
            setGap(screenWidth / 2 + 20)
        }
        if (score > 50) {
            updateSpeed(10)
            setGap(screenWidth / 2 + 25)
        }
    }, [score])

    // --------------- Boat and Obstacles Collision ----------------
    useEffect(() => {
        let offsetY = Math.abs(obstacleBottom - boatBottom)
        let offsetY2 = Math.abs(obstacleBottom2 - boatBottom)

        if ((obstaclesNegWidth + obstacleWidth - boatLeft < -20 && offsetY < 30) || (obstaclesNegWidth + obstacleWidth - boatLeft > 0 && offsetY < 30)) {
            props.setGamePlay(false)
        }

        if ((obstaclesNegWidthTwo + obstacleWidth - boatLeft < -20 && offsetY2 < 30) || (obstaclesNegWidthTwo + obstacleWidth - boatLeft > 0 && offsetY2 < 30)) {
            props.setGamePlay(false)
        }
    })

    return (
        <>
            <Score score={score} />
            <Boat boatBottom={boatBottom} boatLeft={boatLeft} boatAnimation={boatAnimation} />
            <Controls controlsLeft={controlsLeft} dispatch={dispatch} />
            <ObstacleBoat randomLeft={obstaclesNegWidth} color={'black'} obstacleBottom={obstacleBottom} obstacleHeight={obstacleHeight} obstacleWidth={obstacleWidth} gap={gap} />
            <ObstacleBoat randomLeft={obstaclesNegWidthTwo} color={'black'} obstacleBottom={obstacleBottom2} obstacleHeight={obstacleHeight} obstacleWidth={obstacleWidth} gap={gap} />
        </>
    )
}
