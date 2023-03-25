import { useReducer } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import AudioListingScreen from "./components/AudioListingScreen";

import AudioContext from "./context/appContext";
import AppReducer from "./reducer/appReducer";

export default function App() {
  const [state, dispatch] = useReducer(AppReducer, "");
  return (
    <AudioContext.Provider value={{ state, dispatch }}>
      <View style={styles.container}>
        <AudioListingScreen />
      </View>
    </AudioContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 10,
  },
});
