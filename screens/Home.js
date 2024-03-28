import React from "react";
import { StyleSheet, Button, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate("Game")} title="Start game!" />
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
