import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { useState } from "react";

export default function GameScreen() {
  return (
    <View>
      <View>
        <text>Opponenet's Guess</text>
      </View>
      <View></View>
      <View></View>
    </View>
  );
}

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
