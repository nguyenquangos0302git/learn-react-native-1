import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [name, setName] = useState<string>("abc");
  const [age, setAge] = useState<number>(0);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{name}</Text>
      </View>
      <Text>Test</Text>
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
