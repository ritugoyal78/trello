
import React from 'react';
import {Text,View,StyleSheet,Button} from 'react-native'

import ToDo from './components/ToDo'
import Done from './components/Done'
import Doing from './components/Doing'
import Card from './components/Card'
import InputContainer from './components/Input/InputContainer'
const App=()=>{
return(
  <View>
<ToDo/>
<Done/>
<Doing/>

</View>
)
}
export default App;

