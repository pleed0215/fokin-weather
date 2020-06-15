import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherIconStyle = (name) => {
  switch (name) {
    case "Thunderstorm":
      return { icon: "weather-lightning", style: ["#0518ff", "#00ffef"] };
    case "Drizzle":
      return { icon: "weather-hail", style: ["#ff8605", "#d8ff00"] };
    case "Rain":
      return { icon: "weather-pouring", style: ["#16b3f8", "#6a82ff"] };
    case "Snow":
      return { icon: "weather-snowy", style: ["#c9ffeb", "#00f6ff"] };
    case "Clear":
      return { icon: "weather-sunny", style: ["#bcf7b8", "#48d351"] };
    case "Clouds":
      return { icon: "weather-cloudy", style: ["#bcf7b8", "#9568ff"] };
    default:
      return { icon: "weather-fog", style: ["#bcf7b8", "#ff68c7"] };
  }
};

export default function Weather({ temp, condition, loc, desc }) {
  const iconAndStyle = weatherIconStyle(condition);
  return (
    <LinearGradient colors={iconAndStyle.style} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.childContainer}>
        <MaterialCommunityIcons
          name={iconAndStyle.icon}
          size={96}
          color="white"
        />
        <Text style={styles.tempFont}>{Math.floor(temp)}℃</Text>
      </View>
      <View style={styles.childContainer}>
        <Text style={styles.titleFont}>{loc}</Text>
        <Text style={styles.subtitleFont}>{desc}</Text>
      </View>
    </LinearGradient>
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
    color: "white",
  },
  childContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleFont: {
    fontSize: 39,
    color: "white",
    marginBottom: 10,
  },
  subtitleFont: {
    fontSize: 38,
    color: "white",
    fontWeight: "600",
  },
});
