import { Fragment } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  todo: {
    fontSize: 50,
    color: "pink",
    backgroundColor: "black",
    marginVertical: 10,
    padding: 10,
  },
});

interface IListTodoProps {
  todos: ITodo[];
  deleteTodo: (id: number) => void;
}

const ListTodo = (props: IListTodoProps) => {
  const { todos, deleteTodo } = props;

  return (
    <Fragment>
      <FlatList
        data={todos}
        keyExtractor={({ id }) => id + ""}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => deleteTodo(item.id)}>
              <Text style={styles.todo}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </Fragment>
  );
};

export default ListTodo;
