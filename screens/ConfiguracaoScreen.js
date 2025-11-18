import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useThemeStyles } from "../hooks/useThemeStyles"; // Importa o hook personalizado


export default function ConfiguracaoScreen() {
  const styles = createStyles(useThemeStyles());

  return (
    <View style={styles.container}>
      <AntDesign style={styles.Flecha} name="arrow-left" size={30} color="#244F7E" />
      <Text style={styles.Title}>SafeWaves</Text>
      <Text style={styles.SubTitle}>Configuração</Text>
      <View style={styles.line} />


      <View style={styles.configuracao}>
  <Text style={styles.tituloAtiv}>Controle de dispositivos</Text>

  {/* Card 1 */}
  <TouchableOpacity style={styles.cardConfig}>
    <Text style={styles.cardText}>Dispositivo 1</Text>
  </TouchableOpacity>

  {/* Card 2 */}
  <TouchableOpacity style={styles.cardConfig}>
    <Text style={styles.cardText}>Dispositivo 2</Text>
  </TouchableOpacity>

  {/* Card 3 */}
  <TouchableOpacity style={styles.cardConfig}>
    <Text style={styles.cardText}>Dispositivo 3</Text>
  </TouchableOpacity>
</View>

    </View>

  );
}

const createStyles = (theme) =>
  StyleSheet.create({
  container: {
    backgroundColor: theme.background,
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

//------------------------------------------------

    configuracao: {
      backgroundColor: theme.buttonSecundario,
      borderRadius: 20,
      borderColor: theme.border,
      borderWidth: 1,
      width: 355,
      height: 300,
      marginHorizontal: 15,
      marginTop: 30,
      shadowRadius: { width: 0, height: 12 },
      shadowOpacity: 0.58,
      shadowRadius: 16,
      elevation: 10,
      shadowColor: theme.shadowColor,
    },
    tituloAtiv: {
      margin: 10,
      color: theme.text,
      fontSize: 16,
    },
    cardConfig: {
      backgroundColor: theme., // Cor do card2 do tema
      borderRadius: 10,
      padding: 15,
      marginVertical: 10, // Espaçamento entre os cards
      shadowColor: theme.shadow, // Sombra
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5, // Sombra no Android
    },
    cardText: {
      color: theme.text, // Cor do texto
      fontSize: 16,
      fontWeight: "bold",
    },
    
});

