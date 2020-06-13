import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const IconNames = (name) => {
  switch (name) {
    case "Thunderstorm":
      return "weather-lightning";
    case "Drizzle":
      return "weather-hail";
    case "Rain":
      return "weather-pouring";
    case "Snow":
      return "weather-snowy";
    case "Clear":
      return "weather-sunny";
    case "Clouds":
      return "weather-cloudy";
    default:
      return "weather-fog";
  }
};

export default function Weather({ temp, condition, loc, desc }) {
  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <MaterialCommunityIcons name={IconNames(condition)} size={96} />
        <Text style={styles.tempFont}>{temp}℃</Text>
      </View>
      <View style={styles.childContainer}>
        <Text>{loc}</Text>
        <Text>{desc}</Text>
      </View>
    </View>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.string.isRequired,
  loc: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tempFont: {
    fontSize: 46,
  },
  childContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
