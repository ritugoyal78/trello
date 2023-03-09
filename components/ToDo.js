import React,{useState} from 'react';

import {Text,View,StyleSheet,Button,TouchableOpacity} from 'react-native'
import {Paper,Typography} from '@material-ui/core';

import Ionicons from "react-native-vector-icons/Ionicons"
import InputContainer from "./Input/InputContainer"

const ToDo=()=>{
 
 const Fun=()=>{
   
  return (
    <View>
    <InputContainer/>
    </View>
     )
     }
return(
  <View style={styles.container}>
<Paper style={styles.menu}>
<TouchableOpacity onPress={()=>Fun}>
 
<Text> Todo</Text>

 <Ionicons name="dots-three-horizontal" size={20} color="black" style={styles.icon}/>

</TouchableOpacity>


</Paper>
</View>
)
}
export default ToDo;

const styles=StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"space-between"
  },
  menu:{
    display:'flex',
    width:'80px',
    height:'30px',
    marginTop:20,
    backgroundColor:"lightblue",
    marginLeft:3,
    padding:5,position:'fixed',
    top:0,
    left:0
      },
      icon:{
        justifyContent:"center",
        //flexGrow:1
      }
  
})
