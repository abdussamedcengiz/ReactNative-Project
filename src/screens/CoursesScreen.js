import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'

export default function CoursesScreen() {
  const courses=[
    {name:'angular',id: 1},
    {name:'ract native',id: 2},
    {name:'c#',id: 3},
    {name:'.net',id: 4},
    {name:'js',id: 5},



];
  return (
    <FlatList
    data={courses}
    // horizontal={true}
    // showsHorizontalScrollIndicator={false}
    keyExtractor={(item)=>item.id}
    renderItem={({item})=>{
      return <Text style={styles.content}>{item.name}</Text>;
  
    }} 
       
      />
  );
}

const styles = StyleSheet.create({
  content:{
    fontSize : 20,
    backgroundColor:"red",
    marginBottom:10,
    padding:20,
  }
});