import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useThemeStyles } from "../hooks/useThemeStyles";

export default function RelatorioScreen({ navigation }) {
  const styles = createStyles(useThemeStyles());

  return (
 <View style={styles.container}>
      <View style={styles.top}>
      <AntDesign
        style={styles.Flecha}
        name="arrow-left"
        size={30}
        color="#244F7E"
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.Title}>SafeWaves</Text>
      <Text style={styles.SubTitle}>Início</Text>
      <View style={styles.line} />
      </View>

      {/* ---------------------- CARD SISTEMA ------------------------ */}
      <ScrollView style={styles.scroll}> 
      <View style={styles.cardSistema}>
        <View style={styles.headerSistema}>
          <Text style={styles.textSistemaTitulo}>Sistema de Monitoramento</Text>
          <View style={styles.statusSuccess}>
            <Text style={styles.statusSuccessText}>Sistema Ativo</Text>
          </View>
        </View>

        <Text style={styles.sub}>Última atualização: 10:00</Text>

        <View style={styles.rowBetween}>
          <View style={styles.indicador}>
            <Text style={styles.numGreen}>2</Text>
            <Text style={styles.indText}>Sensores Online</Text>
          </View>

          <View style={styles.indicador}>
            <Text style={styles.numRed}>2</Text>
            <Text style={styles.indText}>Alertas Ativos</Text>
          </View>

          <View style={styles.indicador}>
            <Text style={styles.numOrange}>1</Text>
            <Text style={styles.indText}>Offline</Text>
          </View>

          <View style={styles.indicador}>
            <Text style={styles.numBlue}>98%</Text>
            <Text style={styles.indText}>Uptime</Text>
          </View>
        </View>
      </View>

      {/* ---------------------- STATUS DOS SENSORES ------------------------ */}
      <Text style={styles.subTituloSection}>Status dos Sensores</Text>

      {/* Sensor 1 */}
      <View style={styles.cardSensor}>
        <View style={styles.dotGreen} />
        <View>
          <Text style={styles.nomeSensor}>Câmera Principal</Text>
          <Text style={styles.localSensor}>Entrada Principal</Text>
        </View>
        <Text style={styles.statusOnline}>Online</Text>
      </View>

      {/* Sensor 2 */}
      <View style={styles.cardSensor}>
        <View style={styles.dotRed} />
        <View>
          <Text style={styles.nomeSensor}>Sensor de Movimento</Text>
          <Text style={styles.localSensor}>Jardim Frontal</Text>
        </View>
        <Text style={styles.statusAlerta}>Alerta</Text>
      </View>

      {/* Sensor 3 */}
      <View style={styles.cardSensor}>
        <View style={styles.dotOrange} />
        <View>
          <Text style={styles.nomeSensor}>Sensor de Janela</Text>
          <Text style={styles.localSensor}>Sala de Estar</Text>
        </View>
        <Text style={styles.statusOffline}>Offline</Text>
      </View>

      {/* Sensor 4 */}
      <View style={styles.cardSensor}>
        <View style={styles.dotGreen} />
        <View>
          <Text style={styles.nomeSensor}>Câmera Principal</Text>
          <Text style={styles.localSensor}>Entrada Principal</Text>
        </View>
        <Text style={styles.statusOnline}>Online</Text>
      </View>

      {/* ---------------------- ALERTAS ------------------------ */}
      <Text style={styles.subTituloSection}>Alertas Recentes</Text>

      <View style={styles.cardAlert}>
        <Text style={styles.alertTexto}>Movimento detectado no jardim frontal</Text>
        <TouchableOpacity style={styles.botaoAcao}>
          <Text style={styles.botaoAcaoTxt}>Resolver</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardAlert}>
        <Text style={styles.alertTexto}>Bateria baixa no sensor da sala</Text>
        <TouchableOpacity style={styles.botaoAcao}>
          <Text style={styles.botaoAcaoTxt}>Resolver</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardAlert}>
        <Text style={styles.alertTexto}>Câmera lateral desconectada</Text>
        <TouchableOpacity style={styles.botaoAcao}>
          <Text style={styles.botaoAcaoTxt}>Resolver</Text>
        </TouchableOpacity>
      </View>
   </ScrollView>
    </View>
  );
}

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      flex: 1,
    },
    top: {
      backgroundColor: theme.buttonSecundario,
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
      color: theme.title
    },
    SubTitle: {
      marginTop: 0,
      marginLeft: 65,
      fontSize: 16,
      opacity: 0.5,
      color: theme.title
    },
    line: {
      marginTop: 10, // Espaço entre os textos e a linha
      marginHorizontal: 0, // Margem lateral para ajustar o comprimento da linha
      borderBottomWidth: 1, // Espessura da linha
      borderBottomColor: theme.title, // Cor da linha
    },

    /* CARD SISTEMA */
    cardSistema: {
      backgroundColor: theme.buttonSecundario,
      padding: 20,
      borderRadius: 20,
      marginTop: 20,
      shadowRadius: { width: 0, height: 12 },
      shadowOpacity: 0.58,
      shadowRadius: 16,
      shadowColor: theme.shadow,
     marginHorizontal: 15,

    },
    headerSistema: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    textSistemaTitulo: {
      color: theme.text,
      fontSize: 16,
      fontWeight: "bold",
    

    },
    sub: { color: theme.text, opacity: 0.6, marginTop: 3 },
    statusSuccess: {
      backgroundColor: theme.verde,
      paddingVertical: 5,
      paddingHorizontal: 12,
      borderRadius: 12,
    },
    statusSuccessText: { color: theme.text, fontSize: 12 },

    rowBetween: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
    },
    indicador: { alignItems: "center" },
    indText: { color: theme.text, fontSize: 10, marginTop: 2 },

    numGreen: { color: "#46A329", fontSize: 22, fontWeight: "bold" },
    numRed: { color: "#B4060C", fontSize: 22, fontWeight: "bold" },
    numOrange: { color: "#D26A1B", fontSize: 22, fontWeight: "bold" },
    numBlue: { color: "#4A7FA7", fontSize: 22, fontWeight: "bold" },

    /* STATUS SENSORES */
    subTituloSection: {
      marginTop: 25,
      marginBottom: 5,
      marginLeft: 5,
      color: theme.text,
      fontSize: 16,
      fontWeight: "bold",
     marginHorizontal: 15,
    },

    cardSensor: {
     marginHorizontal: 15,
      backgroundColor: theme.buttonSecundario,
      borderRadius: 15,
      padding: 15,
      marginVertical: 8,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    dotGreen: {
      width: 14,
      height: 14,
      borderRadius: 7,
      backgroundColor: "#46A329",
    },
    dotRed: {
      width: 14,
      height: 14,
      borderRadius: 7,
      backgroundColor: "#B4060C",
    },
    dotOrange: {
      width: 14,
      height: 14,
      borderRadius: 7,
      backgroundColor: "#D26A1B",
    },

    nomeSensor: { color: theme.text, fontWeight: "bold" },
    localSensor: { color: theme.text, opacity: 0.6, fontSize: 12 },

    statusOnline: { color: "#46A329", fontWeight: "600" },
    statusAlerta: { color: "#B4060C", fontWeight: "600" },
    statusOffline: { color: "#D26A1B", fontWeight: "600" },

    /* ALERTAS */
    cardAlert: {
     marginHorizontal: 15,
      marginTop: 10,
      marginBottom: 10,
      backgroundColor: theme.buttonSecundario,
      borderRadius: 15,
      padding: 15,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    alertTexto: {
      color: theme.text,
      width: "60%",
      fontSize: 13,
    },
    botaoAcao: {
      backgroundColor: theme.buttonPrincipal,
      paddingVertical: 6,
      paddingHorizontal: 14,
      borderRadius: 10,
    },
    botaoAcaoTxt: {
      color: theme.text,
      fontSize: 12,
      fontWeight: "bold",
    },
  });
