import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import { View, Text, Alert } from "react-native";
import Weather from "./Weather";

const OWA_KEY = "2e46d3899d3ca08b0137e22b2e4857b9";
const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather";

// 웬만하면 flex에서 레이아웃 작업 권장.
export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        // trying to get location permission.
        let { status } = await Location.requestPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
        }

        // getting current position.
        let location = await Location.getCurrentPositionAsync({});
        let { data: currWeather } = await axios.get(WEATHER_API, {
          params: {
            lat: location.coords.latitude,
            lon: location.coords.longitude,
            appid: OWA_KEY,
            units: "metric",
          },
        });

        setLocation(location);
        setWeather(currWeather);
        setLoading(false);
      } catch (err) {
        console.log(err);
        Alert.alert("Error in initializing", "haha");
      }
    })();
  });

  return isLoading ? (
    <Loading />
  ) : (
    <Weather
      temp={weather.main.temp}
      condition={weather.weather[0].main}
      loc={weather.name}
      desc={weather.weather[0].description}
    />
  );
}
