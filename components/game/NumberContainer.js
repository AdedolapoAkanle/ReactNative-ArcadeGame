import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../screens/constants/colors'

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 24, 
        borderRadius: 8,
        margin: 24, alignItems:"center"
    }, 

    numberText:{
        color: Colors.accent500,
        fontFamily:"open-sans-bold",
        fontSize: 36, 
        // fontWeight: "bold"
    }
})