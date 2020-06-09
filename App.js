import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.fucking}>뻑킹 혜진</Text>
      <Text style={styles.fucking}>뻑킹 혜진</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  fucking: {
    color: "white",
    fontWeight: "900",
  },
});
