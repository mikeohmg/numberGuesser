import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import StartGameScreen from "./screens/StartGameScreen";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [guessText, setGuess] = useState("");
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameisOver] = useState(true);

  const [fontsLoaded] = Font.useFonts({
    "comic-sans": require("./assets/fonts/LDFComicSans.ttf"),
    "comic-sans-bold": require("./assets/fonts/LDFComicSansBold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  function startGameHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameisOver(false);
  }

  function inputHandler(enteredText) {
    setGuess(enteredText);
    console.log(guessText);
  }

  function gameOverHandler() {
    setGameisOver(true);
  }

  let screen = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber) {
    screen = <GameScreen userInput={userNumber} gameIsOver={gameOverHandler} />;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient colors={["#59d98f", "#cccccc"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
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
