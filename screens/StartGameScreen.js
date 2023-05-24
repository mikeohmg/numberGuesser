import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen(props) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber > 99 || chosenNumber <= 0) {
      Alert.alert(
        "Invalid Input",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    props.onStartGame(chosenNumber);
  }

  function resetInputHandler() {
    setEnteredNumber("");
    Alert.alert("Reset Input", "Resetting Input Field.", [
      { text: "Okay", style: "default" },
    ]);
  }

  return (
    <View style={styles.screenContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Please input any number from 1 - 100</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}
export default StartGameScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  numberInput: {
    fontFamily: "comic-sans-bold",
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ffffff",
    borderBottomWidth: 2,
    color: "#ffffff",
    marginVertical: 8,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  buttonContainer: {
    flex: 1,
  },
});
