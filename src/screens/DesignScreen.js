import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DesignScreen() {
  return (
    <View style={styles.sl}>
      <View
      style={{width:50,height:100,backgroundColor:'red',margin:10,alignSelf:'flex-start',left:0,top:0,position:'absolute'}}/>
      <View
      style={{width:50,height:200,backgroundColor:'blue',margin:10,alignSelf:'flex-start',left:200}}/>
      <View
      style={{width:70,height:250,backgroundColor:'green',margin:10,alignSelf:'flex-end',right:250}}/>
       <View
      style={{width:70,height:250,backgroundColor:'yellow',margin:10,alignSelf:'flex-end',left:40}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  sl:{
    margin:10,
    height:700,
     alignItems:'flex-start',
     flexDirection:'row',
     justifyContent:'flex-end'
  }
  
})