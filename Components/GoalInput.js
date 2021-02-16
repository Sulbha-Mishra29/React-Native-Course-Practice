import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal,Text } from 'react-native';
import GoalItem from './GoalItem';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler=() =>{
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };
  {/*The modal has inbuilt function to set visibile, so we passed props true/false (we set it in app.js) to this function*/}
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style= {styles.buttonConatiner}>
        <View style= {styles.button}>
        <Button title="CANCLE" color='red' onPress={props.onCancle} />
        </View>
        <View style= {styles.button}>
        <Button title="ADD" onPress={addGoalHandler} />
        </View>
        </View>
        {/*Retrive props and pass argument as enteredGoal because when 
        button pressed enteredGoal is not available in that page*/}
        {/*<Button title ="Add Value" onPress = {()=>props.AddGoal(enteredGoal)}/>  we can use this also*/}
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom:10,
    padding: 10
  },
  buttonConatiner:{
     flexDirection : 'row',
     justifyContent: 'space-around',
     width:'50%'
  },
  button:{
    width : "40%"
  }

});

export default GoalInput;
