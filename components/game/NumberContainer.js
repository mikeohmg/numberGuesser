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
    width: "100%",
    borderWidth: 4,
    borderColor: "white",
    padding: 24,
    margin: 24,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontFamily: "comic-sans-bold",
    color: "white",
    fontSize: 36,
  },
});
