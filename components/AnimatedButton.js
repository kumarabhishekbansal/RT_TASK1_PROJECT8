import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
export default function AnimatedButton({ action, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.button,
          action === "higher" ? styles.buttonGreen : styles.buttonRed,
        ]}
      >
        <Text style={styles.buttonText}>{action}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 15,
    padding: 30,
    marginVertical: 15,
  },
  buttonRed: {
    backgroundColor: "red",
  },
  buttonGreen: {
    backgroundColor: "green",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    textTransform: "capitalize",
  },
});
