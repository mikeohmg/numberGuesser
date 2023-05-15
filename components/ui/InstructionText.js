import { Text, StyleSheet } from "react-native";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "comic-sans",
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
});

export default InstructionText;
