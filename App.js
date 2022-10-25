import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './componnents/Task';

export default function App() {

  const [task, setTask] = useState();

  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (

    <View style={styles.container}>
      <StatusBar
        backgroundColor="#55BCF6"
        translucent={false}
      />

      {/* Today's Tasks title */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>CHUP CHAP KAAM KHATAM KARLE BOSDIKE :</Text>
      </View>

      <View style={styles.itmes}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* This is where all task will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>

      {/* Write a Task*/}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper} >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 0,
    paddingHorizontal: 20,
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  itmes: {
    height: '80%',
    paddingHorizontal: 20,
    /* borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: '#55BCF6', */
  },
  writeTaskWrapper: {
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#55BCF6',
    borderWidth: 2,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#55BCF6',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: 25,
    color: '#55BCF6',
    fontStyle: 'bold,'
  },
});
