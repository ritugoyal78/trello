import React from 'react';
import {Paper,Typography} from '@material-ui/core';

import {Text,View,StyleSheet,Button} from 'react-native'
const Card=(props)=>{
console.log(props.text)
//
return(
<Paper style={styles.card}>
<Typography key={props.index} style={{marginTop:2}}> {props.text}

 </Typography>


</Paper>

)
}
export default Card;

const styles=StyleSheet.create({
  card:{display:'flex',
    padding:(1,1,1,2),
    margin:-1,
    top:84,
    position:'fixed',
    width:0
  }
})