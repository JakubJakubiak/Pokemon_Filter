import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Poki from "./components/Poki";

export default function App() {
  return (
    <View style={styles.container}>
      <Poki />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
