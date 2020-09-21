import React, { useState } from 'react';
import { StyleSheet, View,Text,TextInput,Button, Modal} from 'react-native';

const GoalInput = (props) =>{
  const [enteredGoal,setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) =>{
    setEnteredGoal(enteredText);
  }
    return (
      <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>     
        <TextInput
        placeholder="Enter the Course Goal"
        style={styles.TextInput}
        onChangeText={(e) => goalInputHandler(e)}
        value={enteredGoal}/>
        <View style={styles.btnContainer}>
      <View>      
          <Button title="CANCEL"
        color="red"
        onPress={()=>props.onCancel()}
        />
        </View>

        <View>
        <Button title="ADD" 
        onPress={() => {
          props.onAddGoal(enteredGoal)
          setEnteredGoal("")
          }}/>
          </View>
          </View>
     </View>
     </Modal>
     )
}

export default GoalInput


const styles = StyleSheet.create({
    listItem:{
        padding:10,
        backgroundColor:'#ccc',
        borderColor:'black',
        marginVertical:7,
        borderWidth:1
      },
      inputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      },
      TextInput:{
        borderColor:'black',
        borderWidth:1,
        padding:10,
        width:'80%',
        marginBottom:10
      },
      btnContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
      }
})