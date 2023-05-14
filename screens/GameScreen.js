import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { useState, useEffect } from "react";
import StartGameScreen from "./StartGameScreen";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

export default function GameScreen() {
  function returnHandler() {
    console.log("Return");
  }

  return (
    <View style={styles.screenContainer}>
      <View style={styles.titleContainer}>
        <Title>Opponent's Guess</Title>
      </View>
      <PrimaryButton>Return</PrimaryButton>
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
    padding: 16,
    backgroundColor: "#59d98f",
    borderRadius: 8,
    elevation: 10,
  },
});
