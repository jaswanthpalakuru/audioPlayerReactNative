import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import AudioContext from "../context/appContext";

import * as MediaLibrary from "expo-media-library";

const AudioListingScreen = () => {
  const { state, dispatch } = useContext(AudioContext);

  useEffect(() => {
    getPermissions();
  }, []);

  const getPermissions = async () => {
    const resp = await MediaLibrary.requestPermissionsAsync();
    if (resp.granted) {
      const assets = await MediaLibrary.getAssetsAsync({
        mediaType: "audio",
        sortBy: "creationTime",
      });
      dispatch({ payload: assets["assets"], type: "ADD_ASSET" });
    } else if (resp.canAskAgain) {
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
