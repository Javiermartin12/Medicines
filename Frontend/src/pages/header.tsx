import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Break"];
export const header = ({ item }) => {
  return (
    <View>
      {options.map((item, index) => (
        <TouchableOpacity key={index}>
          <Text>{}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default header;
