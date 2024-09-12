import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "./src/components/Header";

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "LONG");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Pomodoro</Text>
        <StatusBar style="auto" />
        <Header time={time} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
