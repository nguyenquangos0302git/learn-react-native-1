import { Pressable, StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const styles = StyleSheet.create({
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    flexDirection: "row",

    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignSelf: "flex-start",
    backgroundColor: "#ccc",
  },
  text: {
    textTransform: "uppercase",
  },
});

interface IMineButtonProps {
  onPress: () => void;
  title: string;
}

const MineButton = (props: IMineButtonProps) => {
  const { onPress, title } = props;

  return (
    <>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => ({ opacity: pressed === true ? 0.5 : 1 })}
      >
        <View style={styles.btnContainer}>
          <AntDesign name="pluscircle" size={24} color="black" />
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </>
  );
};

export default MineButton;
