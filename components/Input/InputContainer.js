import React,{useState} from 'react';

import {Text,View,StyleSheet,Button,TextInput,TouchableOpacity} from 'react-native'
import {Paper,Typography,InputBase} from '@material-ui/core';
import Ionicons from "react-native-vector-icons/Ionicons"
import InputCard from './InputCard'
import Card from '../Card'

const InputContainer=()=>{
 const [task,setNewTask]= useState("")
  const[addTask,setAddTask]=useState([])
  const text=[]
  const Addtask=()=>{
    
    setAddTask((taskList)=>{
      const updatedTaskList=[...addTask,task]
      setNewTask('')
      console.log(addTask)
      return updatedTaskList
    })
  }
  
return(
  <>
  <View style={styles.inputContainer}>
 
 <TextInput style={styles.input} 
      placeholder="enter what you want to do"
      value={task}
      onChange={(e)=>setNewTask(e.target.value)} />

<TouchableOpacity style={styles.input} onPress={Addtask}> 
<Text style={styles.text}>+ Add A Card</Text>
</TouchableOpacity>
<View>
 {addTask!=[] && addTask.map((data,index)=>{
  return(
    <Card index={index} text={data}/>
  )
})}
</View>
<Card text={addTask}/>
</View>



</>
)

}
export default InputContainer;

const styles=StyleSheet.create({
  input:{display:'flex',
    padding:(1,1,1,2),
   
    margin:1,
    top:0,
    position:'relative',
    width:120,
    borderWidth:2,
    borderRadius:5,

  },
  inputContainer:{
    display:'flex',
    flexDirection:'column',
    alignItems:"center",
    justifyContent:"space-between",
    position:'relative',
    top:150,
    left:0,
    width:180,
      backgroundColor:'lightBlue',
      height:100,
      borderWidth:2,
      borderRadius:5

  },
  text:{
    display:'flex',
     flexDirection:'column',
    justifyContent:"center",
    alignItems:"center",
    
  }
  /*menu:{
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
      }*/
  
})