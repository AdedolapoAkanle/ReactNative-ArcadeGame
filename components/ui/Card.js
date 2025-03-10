import React from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../../screens/constants/colors';

const Card = ({children}) => {
  return (
  <View style={styles.inputContainer}>{children}</View>
  )
}

export default Card;

const styles = StyleSheet.create({
    
    inputContainer: {
        justifyContent:"center",
        alignItems:"center", 
        marginTop: 100, 
        marginHorizontal: 24,
        padding: 16, 
        backgroundColor: Colors.primary700,
        borderRadius: 8,
        elevation: 4,
        shadowColor:"black",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    
})