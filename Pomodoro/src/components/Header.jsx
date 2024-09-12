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
          style={styles.items}
          onPress={() => handlePress(index)}
        >
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
    borderWidth: 2,
    borderColor: "black",
    padding: 3,
  },
});
