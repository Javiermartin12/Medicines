import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Header from "./src/components/header";

import React from "react";
import { SafeAreaView, View } from "react-native";

const App: React.FC = () => {
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
};

export default App;
