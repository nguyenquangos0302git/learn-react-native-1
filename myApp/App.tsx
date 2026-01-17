import React, { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import InputTodo from "./components/todo/input.todo";
import ListTodo from "./components/todo/list.todo";

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (name: string) => {
    const newTodo = {
      id: getRandomIntInclusive(0, 1000000),
      title: name,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id != id);
    setTodos(newTodos);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <InputTodo addTodo={addTodo} />
        <ListTodo todos={todos} deleteTodo={deleteTodo} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 50,
  },
});
