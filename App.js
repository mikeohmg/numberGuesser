import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [guessText, setGuess] = useState("");
  const [userNumber, setUserNumber] = useState();

  function startGameHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function inputHandler(enteredText) {
    setGuess(enteredText);
    console.log(guessText);
  }

  let screen = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    /*  <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text>Number Guessing Game</Text>
      </View>
      <View style={styles.inputContainer}>
        <View>
          <Text>Enter a Number</Text>
        </View>
        <View style={styles.textInput}>
          <TextInput
            placeholder="What is your guess?"
            onChangeText={inputHandler}
            value={guessText}
          ></TextInput>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Confirm" />
          </View>
          <View style={styles.button}>
            <Button title="Reset" />
          </View>
        </View>
      </View>
    </View> */
    <LinearGradient colors={["#59d98f", "#cccccc"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
  titleContainer: {
    padding: 16,
    backgroundColor: "#fff",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 6,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    color: "#ffffff",
    borderRadius: 6,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
