import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useThemeStyles } from "../hooks/useThemeStyles"; // Importa o hook personalizado
export default function HomeScreen({ navigation }) {
  const styles = createStyles(useThemeStyles());

  return (
    <View style={styles.container}>
      <AntDesign
        style={styles.Flecha}
        name="arrow-left"
        size={30}
        color="#244F7E"
      />
      <Text style={styles.Title}>SafeWaves</Text>
      <Text style={styles.SubTitle}>Início</Text>
      <View style={styles.line} />

      <View style={styles.row}>
        {/* Card 1 - Navega para AlertaScreen */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("AlertaScreen")}
        >
          <Feather
            style={styles.alert}
            name="alert-triangle"
            size={75}
            color="#061931"
          />
        </TouchableOpacity>

        {/* Card 2 - Navega para ImagemScreen */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("ImagemScreen")}
        >
          <Ionicons name="videocam-outline" size={75} color="#061931" />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        {/* Card 3 */}
        <TouchableOpacity style={styles.newCard}>
          <Text style={styles.nomeCard}>Bateria</Text>
          <Text style={styles.num}>85%</Text>
          <Text style={styles.subNomeCard}>Sensores</Text>
        </TouchableOpacity>

        {/* Card 4 */}
        <TouchableOpacity style={styles.newCard}>
          <Text style={styles.nomeCard}>Vizinhos</Text>
          <Text style={styles.num}>25</Text>
          <Text style={styles.subNomeCard}>Conectados</Text>
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
      opacity: 0.5,
      color: "#244F7E",
    },
    line: {
      marginTop: 10, // Espaço entre os textos e a linha
      marginHorizontal: 0, // Margem lateral para ajustar o comprimento da linha
      borderBottomWidth: 0.5, // Espessura da linha
      borderBottomColor: "#244F7E", // Cor da linha
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
    },
    card: {
      flex: 1,
      height: 129,
      borderRadius: 20,
      backgroundColor: theme.buttonPrincipal,
      marginHorizontal: 5, // espaçamento entre os cards
      alignItems: "center",
      justifyContent: "center",
    },
    newCard: {
      backgroundColor: theme.buttonSecundario,
      flex: 1,
      height: 129,
      borderRadius: 20,
      borderColor: theme.border,
      borderWidth: 1,
      marginHorizontal: 5, // espaçamento entre os cards
      alignItems: "center",
      justifyContent: "center",
    },
    nomeCard: {
      color: theme.text,
      height: 70,
      fontSize: 11,
    },
    num: {
      color: theme.number,
      fontSize: 30,
      fontWeight: "bold",
      position: "absolute",
      marginTop: 0,
      height: 50,
      alignItems: "center",
    },
    subNomeCard: {
      color: theme.text,
      fontSize: 11,
      height: 25,
    },
  });