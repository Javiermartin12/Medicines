import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";

export default function App() {
  const [working, setWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO | SHORT | BREAK");
  return (
    <SafeAreaView>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
