import React from 'react';

import {Text,View,StyleSheet,Button} from 'react-native'
import {Paper,Typography,CssBaseline} from '@material-ui/core';

import Ionicons from "react-native-vector-icons/Ionicons"
const Doing=()=>{

return(
  <View style={styles.container}>
<Paper style={styles.menu}>
<Typography> Doing

 <Ionicons name="dots-three-horizontal" size={20} color="black" style={styles.icon}/>

</Typography>


</Paper>
</View>
)
}
export default Doing;

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
      padding:5,
      position:'fixed',
top:0,
left:238
      },
      icon:{
        justifyContent:"center",
        //flexGrow:1
      }
  
})
