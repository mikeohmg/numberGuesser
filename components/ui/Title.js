import { Text, StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "comic-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    padding: 12,
  },
});
