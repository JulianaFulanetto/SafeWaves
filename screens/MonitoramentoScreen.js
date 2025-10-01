import { View, Text, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useTheme } from "../hooks/useThemeStyles";

export default function MonitoramentoScreen() {
  // usa o hook corretamente
  const theme = useTheme();

  // cria styles DINAMICAMENTE com base no tema
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme?.background || "#ffffff",
      flex: 1,
    },
    Flecha: {
      position: "absolute",
      top: 70,
      left: 20,
      fontSize: 30,
    },
    Title: {
      marginTop: 60,
      marginLeft: 65,
      fontSize: 30,
      fontWeight: "bold",
      color: theme?.primary || "#244F7E",
    },
    SubTitle: {
      marginTop: 0,
      marginLeft: 65,
      fontSize: 16,
      opacity: 0.5,
      color: theme?.primary || "#244F7E",
    },
    line: {
      marginTop: 10,
      marginHorizontal: 0,
      borderBottomColor: theme?.primary || "#244F7E",
      borderBottomWidth: 0.5,
    },
  });

  return (
    <View style={styles.container}>
      <AntDesign style={styles.Flecha} name="arrowleft" size={30} color={theme?.primary || "#244F7E"} />
      <Text style={styles.Title}>SafeWaves</Text>
      <Text style={styles.SubTitle}>Monitoramento</Text>
      <View style={styles.line} />
    </View>
  );
}