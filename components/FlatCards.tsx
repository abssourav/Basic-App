import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = (): JSX.Element => {
  return (
    <View>
    <Text style={styles.heading1}>Flat Cards</Text>
    <View style={styles.container}>
        <View style={[styles.card, styles.redCard]}>
          <Text style={styles.boxText}>RED</Text>
        </View>
        <View style={[styles.card, styles.greenCard]}>
          <Text style={styles.boxText}>Green</Text>
        </View>
        <View style={[styles.card, styles.blueCard]}>
          <Text style={styles.boxText}>Blue</Text>
        </View>
      
    </View>
  </View>
  )
}

export default FlatCards

const styles = StyleSheet.create({
    heading1:{
        color:'black',
        fontSize:25,
        fontWeight:'bold',
        padding:10
      },
      container:{
        paddingHorizontal:10,
        flexDirection:'row',
        justifyContent:'space-between'
      },
      card:{
        height:100,
        width:100,
        justifyContent:'center',
        alignItems:'center',
        margin:5,
        borderRadius: 5,
    
      },
      redCard:{
        backgroundColor:'red',
      },
      greenCard:{
        backgroundColor:'green',
      },
      blueCard:{
        backgroundColor:'blue',
      },
      boxText:{
        color:'white',
        fontWeight:'bold',
        
      }
})