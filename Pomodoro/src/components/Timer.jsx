import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Timer({ time }) {
  const formattedTime = `${Math.floor(time / 60)}`;
  return (
    <View style={style.container}>
      <Text style={style.time}>{formattedTime}</Text>
    </View>
  );
}

export default Timer;

const style = StyleSheet.create({
  container: {
    flex: 0.3,
    justifyContent: "center",
    padding: 15,
    borderRadius: 15,
    backgroundColor: "aliceblue",
  },
  time: {
    fontSize: 80,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333333",
  },
});
