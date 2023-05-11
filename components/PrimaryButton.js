import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton(props) {
  function pressHandler() {
    console.log("Press!");
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#1f7944" }}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 5,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#4bbd7a",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
