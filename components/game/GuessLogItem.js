import { View, Text, StyleSheet } from "react-native";
import Colors from "../../assets/constants/colors";

function GuessLogItem(props) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{props.roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {props.guess}</Text>
    </View>
  );
}
export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: "white",
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.primary1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  itemText: {
    fontFamily: "comic-sans",
    color: "white",
  },
});
