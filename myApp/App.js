import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Aabc</Text>
      </View>
      <Text>Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
    color: "red"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
