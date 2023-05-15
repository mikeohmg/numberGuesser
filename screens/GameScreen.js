import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";
import { useState, useEffect } from "react";
import StartGameScreen from "./StartGameScreen";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../assets/constants/colors";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen(props) {
  const initialGuess = generateRandomBetween(1, 100, props.userInput);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === props.userInput) {
      props.gameIsOver();
    }
  }, [currentGuess, props.userInput, props.gameIsOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < props.userInput) ||
      (direction === "greater" && currentGuess > props.userInput)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else if (direction === "greater") {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  function returnHandler() {
    console.log("Return");
    console.log(props.userInput);
    console.log(initialGuess);
  }

  return (
    <View style={styles.screenContainer}>
      <View style={styles.titleContainer}>
        <Title>Opponent's Guess</Title>
      </View>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
        </View>
      </View>
      <PrimaryButton onPress={returnHandler}>Return</PrimaryButton>
      <View></View>
    </View>
  );
}

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
