import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Break"];
function Header({ time }) {
  return (
    <View style={{ flexDirection: "row" }}>
      {options.map((items, index) => (
        <TouchableOpacity key={index}>
          <Text>{items}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  items: {
    width: "33%",
  },
});
