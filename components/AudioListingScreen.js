import { View, Text } from "react-native";
import React, { useContext } from "react";
import AudioContext from "../context/appContext";

const AudioListingScreen = () => {
  const context = useContext(AudioContext);
  console.log("assets", context);
  return (
    <View>
      <Text>AudioListingScreen</Text>
    </View>
  );
};

export default AudioListingScreen;
