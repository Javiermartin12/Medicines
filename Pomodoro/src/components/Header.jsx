import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Break"];
function Header({ setTime, currentTime, setCurrentTime }) {
  function handlePress(index) {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 10;
    setCurrentTime(index);
    setTime(newTime * 60);
  }
  return (
    <View style={{ flexDirection: "row" }}>
      {options.map((items, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.items,
            currentTime !== index && { borderColor: "transparent" },
          ]}
          onPress={() => handlePress(index)}
        >
          <Text style={{ fontWeight: "bold" }}>{items}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  items: {
    width: "33%",
    borderWidth: 2,
    borderColor: "white",
    padding: 5,
    alignItems: "center",
    marginVertical: 20,
    borderRadius: 10,
  },
});
