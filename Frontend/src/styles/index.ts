import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.lightBlue,
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  text: {
    color: Colors.darkBlue,
    fontSize: 18,
    fontWeight: "bold",
  },
});
