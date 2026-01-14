import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState<string>();
  const [age, setAge] = useState<number>(0);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{name}</Text>
        <TextInput
          onChangeText={(v) => setName(v)}
          value={name}
          autoCapitalize="none"
          autoCorrect={false}
          style={{
            borderColor: "black",
            borderWidth: 1,
          }}
        />
        <Button title="add new" />
        <Text style={styles.text}>{name}</Text>
      </View>
      <Text>Test2</Text>
      <Text>Test2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
    color: "red",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
