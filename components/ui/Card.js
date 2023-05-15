import { StyleSheet, View } from "react-native";
import Colors from "../../assets/constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary1,
    borderRadius: 8,
    elevation: 10,
  },
});
