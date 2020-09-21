import React from 'react';
import { StyleSheet, View,Text, TouchableNativeFeedback } from 'react-native';

const GoalItem = props =>{
    return (
        <TouchableNativeFeedback onPress={()=> props.onDelete(props.id)}>
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
        </TouchableNativeFeedback>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    listItem:{
        padding:10,
        backgroundColor:'#ccc',
        borderColor:'black',
        marginVertical:7,
        borderWidth:1
      }
})