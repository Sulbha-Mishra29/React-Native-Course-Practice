import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  FlatList
} from 'react-native';
import GoalInput from './Components/GoalInput';
import GoalItem from './Components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
       if (goalTitle.length ===0){
         return;
       }
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };
{/* Previously we used 
  outputText in value but now outputText is not present in this file. So now we receive argument in 
  this function as goalTitle(outputText)*/}

  const removeGoalHandler = goalId => {
    console.log(goalId)
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };
{/* It will delete that value whose goal id matches*/}

 const cancleGoalHandler = ()=>{
    setIsAddMode(false);
 };
 {/* To come out of that screen by setting visible mode to false */}

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      {/* when we click on this button visible mode change to true and screen get visible */}
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancle = {cancleGoalHandler}/>
      {/* Now we ned to findout when button is pressed.You can pass that function in props of child function
        which is going to be used eventually in child function */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 100
  }
});
