import { StyleSheet, View, Image, Text } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../assets/constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen(props) {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.titleContainer}>
        <Title>Game is Over</Title>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{" "}
        <Text style={{ color: Colors.secondary1 }}>{props.roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={{ color: Colors.secondary1 }}>{props.userNumber}</Text>
      </Text>
      <PrimaryButton onPress={props.onStarNewGame}>
        Start New Game
      </PrimaryButton>
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
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary1,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "comic-sans",
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginBottom: 24,
  },
});
