import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import AudioContext from "../context/appContext";

import * as MediaLibrary from "expo-media-library";

const AudioListingScreen = () => {
  const context = useContext(AudioContext);

  console.log("assets", context);
  useEffect(() => {
    getPermissions();
  }, []);

  const getPermissions = async () => {
    const resp = await MediaLibrary.requestPermissionsAsync();
    const { granted, canAskAgain } = await MediaLibrary.getPermissionsAsync();
    if (granted) {
      console.log("granted permission");
    } else if (canAskAgain) {
      console.log("permissions are mandatory");
    }
  };
  return (
    <View>
      <Text>AudioListingScreen</Text>
    </View>
  );
};

export default AudioListingScreen;
