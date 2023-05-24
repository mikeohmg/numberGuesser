import { StyleSheet, View, Text } from "react-native";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "white",
    padding: 24,
    margin: 24,
    borderRadius: 9,
  },
  numberText: {
    fontFamily: "comic-sans-bold",
    color: "white",
    fontSize: 36,
    textAlign: "center",
  },
});
