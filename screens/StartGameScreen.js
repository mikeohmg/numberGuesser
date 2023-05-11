import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
      />
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}
export default StartGameScreen;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    padding: 16,
    backgroundColor: "#fff",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 300,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#59d98f",
    borderRadius: 8,
    elevation: 10,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ffffff",
    borderBottomWidth: 2,
    color: "#ffffff",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
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
