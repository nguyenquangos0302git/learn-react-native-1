import { Fragment, useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

import MineButton from "../button/mine.button";

const styles = StyleSheet.create({
  todoInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});

interface IInputTodoProps {
  addTodo: (name: string) => void;
}

const InputTodo = (props: IInputTodoProps) => {
  const { addTodo } = props;

  const [name, setName] = useState<string>();

  const handleAddNewTodo = () => {
    if (!name) {
      Alert.alert("Invalid data", "Invalid name", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }

    addTodo(name);
    setName("");
  };

  return (
    <View>
      <TextInput
        onChangeText={(v) => setName(v)}
        value={name}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.todoInput}
      />
      <MineButton title="add new" onPress={handleAddNewTodo} />
    </View>
  );
};

export default InputTodo;
