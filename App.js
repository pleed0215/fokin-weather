import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import { View, Text } from "react-native";

// 웬만하면 flex에서 레이아웃 작업 권장.
export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  });
  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <View style={{ paddingTop: 50 }}>
      <Text>{text}</Text>
    </View>
  );
}
