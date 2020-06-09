import React from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFAA5",
    justifyContent: "flex-end",
    paddingHorizontal: 50,
    paddingVertical: 100,
  },
  text: {
    color: "gray",
    fontSize: 30,
  },
});

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the weather information</Text>
    </View>
  );
};
