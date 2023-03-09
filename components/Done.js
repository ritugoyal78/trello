import React from 'react';

import {Text,View,StyleSheet,Button} from 'react-native'
import {Paper,Typography,CssBaseline} from '@material-ui/core';

import Ionicons from "react-native-vector-icons/Ionicons"
const Done=()=>{

return(
 <View style={styles.container}>
<Paper style={styles.menu}>
<Typography style={styles.text}> Finished Tasks

 <Ionicons name="dots-three-horizontal" size={20} color="black" style={styles.icon}/>

</Typography>


</Paper>
</View>
)
}
export default Done;
const styles=StyleSheet.create({
 container:{
    display:'flex',
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"space-between"
  },
  menu:{
   display:'flex',
    width:'110px',  padding:5,
    height:'30px',
    marginTop:0,
    backgroundColor:"lightblue",
    marginLeft:100,
    position:"fixed",
    top:20,
    left:10,
    
      },
      text:{
         display:'flex',
        fontSize:15,
        flexWrap:'wrap'
      }
      ,
      icon:{
        justifyContent:"center",
        //flexGrow:1
      }
  
})