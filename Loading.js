import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFAA5",
    justifyContent: "flex-end",
    paddingHorizontal: 50,
    paddingVertical: 100,
  },
  text: {
    color: "white",
    fontSize: 30,
  },
});

export default () => {
  return (
    <LinearGradient colors={["#ffceee", "#ff4100"]} style={styles.container}>
      <Text style={styles.text}>Getting the weather information</Text>
    </LinearGradient>
  );
};
