import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask'

const ToDoList = ({ initialValues }) => {
    const [toDos, settoDos] = useState(initialValues.map((value) => ({ id: uuidv4(), title: value })));

    const addToDo = (initialValue) => {
        const newTitle = { id: uuidv4(), title: initialValue };
        settoDos((prevtoDos) => [...prevtoDos, newTitle]);
    };

    const removeToDo = (id) => {
        settoDos(toDos.filter(todo => todo.id !== id));
      };

    return (
        <View style={styles.container}>
            {toDos.map((todo) => (
                <View key={todo.id}>
                    <View style={styles.todoItem}>
                        <Text style={styles.text}>{todo.title} </Text>
                        <Button title="Remove" onPress={() => removeToDo(todo.id)} />
                    </View>
                </View>
            ))}
            <AddTask onAddTask={addToDo} />
        </View>
      );

};

// function addToDo(newTitle) {
    
// }

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});


export default ToDoList;
