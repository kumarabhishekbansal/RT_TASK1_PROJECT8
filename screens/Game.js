import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Game() {
  const baseNumber = Math.floor(Math.random() * 100);
  const score = Math.floor(Math.random() * 100);
  const [choice, setChoice] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    // console.log("enterdd ",baseNumber,score,choice);
    if (choice) {
        // console.log("before ",baseNumber,score,choice);
      const winner =
        (choice === "higher" && score > baseNumber) ||
        (choice === "lower" && baseNumber > score);
      Alert.alert(`You've ${winner ? "won" : "lost"}`, `You scored: ${score}`);
    //   console.log("after ",baseNumber,score,choice);
        navigation.goBack();
    }
  }, [baseNumber, score, choice]);
  return (
    <View style={styles.container}>
      <Text>Starting: {baseNumber}</Text>
      <Button onPress={() => setChoice("higher")} title="Higher" />
      <Button onPress={() => setChoice("lower")} title="Lower" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
