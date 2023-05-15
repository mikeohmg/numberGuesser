import { StyleSheet, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../assets/constants/colors";

function GameOverScreen() {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.titleContainer}>
        <Title>Game is Over</Title>
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    width: "100%",
    padding: 16,
    backgroundColor: Colors.primary1,
    borderRadius: 8,
    elevation: 10,
  },
});
