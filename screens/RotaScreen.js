import { View, Text, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useThemeStyles } from "../hooks/useThemeStyles";





export default function RotaScreen() {
  const styles = createStyles(useThemeStyles());

  return (
    <View style={styles.container}>
      <AntDesign style={styles.Flecha} name="arrow-left" size={30} color="#244F7E" />
      <Text style={styles.Title}>SafeWaves</Text>
      <Text style={styles.SubTitle}>Rotas</Text>
      <View style={styles.line} />
    </View>
  );
}

const createStyles = (theme) =>
  StyleSheet.create({
  container: {
    backgroundColor: "#021024",
    flex: 1,
  },
  Flecha: {
    position: "absolute", // Permite posicionar a seta de forma absoluta
    top: 70, // Ajuste a posição vertical da seta
    left: 20, // Ajuste a posição horizontal da seta
    fontSize: 30,
  },
  Title: {
    marginTop: 60,
    marginLeft: 65,
    fontSize: 30,
    fontWeight: "bold",
    color: "#244F7E",
  },
  SubTitle: {
    marginTop: 0,
    marginLeft: 65,
    fontSize: 16,
    opacity:0.5,
    color: "#244F7E",
  },
  line: {
    marginTop: 10, // Espaço entre os textos e a linha
    marginHorizontal: 0, // Margem lateral para ajustar o comprimento da linha
    borderBottomWidth: 0.5, // Espessura da linha
    borderBottomColor: "#244F7E", // Cor da linha
  },
});

