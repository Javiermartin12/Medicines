import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import Header from "./src/pages/Header"; // Asegúrate de que "Header" tenga las mayúsculas correctas

export default function App() {
  const [working, setWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO | SHORT | BREAK");
  return (
    <SafeAreaView>
      <View>
        <Header />
        <StatusBar />
      </View>
    </SafeAreaView>
  );
}
