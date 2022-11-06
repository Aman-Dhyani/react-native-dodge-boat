import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Environment from './Components/Environment/Environment'
import Start from './Components/start/Start'

export default function App() {

  const [play, setPlay] = useState(false)
  const setGamePlay = useCallback((val) => {
    setPlay(val)
  })

  return (
    <>
      <View style={styles.ocean}>
        {play === true ? <Environment setGamePlay={setGamePlay} /> : <Start setGamePlay={setGamePlay} />}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  ocean: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignContent: 'center',
  },
})
