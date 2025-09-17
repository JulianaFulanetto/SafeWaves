import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const styles = createStyles(useTheme());

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.card}></View>
    </View>
  );
}

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      alignItems: "center",
      justifyContent: "center",
    },
  });
