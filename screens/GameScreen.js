import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen ({userNumber}) {
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  return (
    <View style={styles.screen}>
      <Title>Opponents's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
        <Text></Text>
      {/* <View>Higher or Lower?</View> */}
        {/* +
        - */}
      {/* <View>LOG ROUNDS</View> */}
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex:1, 
    padding: 24,
  },
  
})