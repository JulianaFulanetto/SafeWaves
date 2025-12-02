import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Pressable,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useThemeStyles } from "../hooks/useThemeStyles"; // Importa o hook personalizado
import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen({ navigation }) {
  const styles = createStyles(useThemeStyles());

  return (
    <View style={styles.container}>
    <View style={styles.top}>
      <AntDesign
        style={styles.Flecha}
        name="arrow-left"
        size={30}
        color="#244F7E"
      />
      <Text style={styles.Title}>SafeWaves</Text>
      <Text style={styles.SubTitle}>Início</Text>
      <View style={styles.line} />
    </View>

      <View style={styles.row}>
        {/* Card 1 - Navega para AlertaScreen */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("AlertaScreen")}
        >
          <Feather style={styles.alert} name="alert-triangle" size={75} />
        </TouchableOpacity>

        {/* Card 2 - Navega para ImagemScreen */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("ImagemScreen")}
        >
          <Ionicons style={styles.camera} name="videocam-outline" size={75} />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        {/* Card 3 */}
        <View style={styles.newCard}>
          <Text style={styles.nomeCard}>Bateria</Text>
          <Text style={styles.num}>85%</Text>
          <Text style={styles.subNomeCard}>Sensores</Text>
        </View>

        {/* Card 4 */}
        <View style={styles.newCard}>
          <Text style={styles.nomeCard}>Vizinhos</Text>
          <Text style={styles.num}>25</Text>
          <Text style={styles.subNomeCard}>Conectados</Text>
        </View>
      </View>


      <View style={styles.acoesRap}>
        <Text style={styles.textAcoes}>Ações Rápidas</Text>

        <View style={styles.rowButtons}>
          <TouchableOpacity
            style={styles.botaoVerde}
            onPress={() => Alert.alert("Tranca ativada!")}
          >
            <Text style={styles.textoBotaoVerd}>Trancar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoVermelho}
            onPress={() => Alert.alert("Emergência acionada!")}
          >
            <Text style={styles.textBotaoVerm}>Emergência</Text>
          </TouchableOpacity>
        </View>
      </View>

      
      <View style={styles.ativRapidas}>
        <Text style={styles.tituloAtiv}>
          Atividade Recente</Text>
        <Text style={styles.textAtiv}>
        <Text style={styles.corBolinha1}>●  </Text>
        Alerta Detectado  -  Ativado há 2min</Text>
        <Text style={styles.textAtiv}>
        <Text style={styles.corBolinha2}>●  </Text>
          Movimento Detectado  -  Piscina-15min</Text>
        <Text style={styles.textAtiv}>
        <Text style={styles.corBolinha3}>●  </Text>
          Novo Vizinho Conectado  -  Maria Silva-1h</Text>
    
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
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
    },

//--------------------------------------------------------------------------

    card: {
      flex: 1,
      marginTop: 20,
      height: 129,
      borderRadius: 20,
      backgroundColor: theme.buttonPrincipal,
      marginHorizontal: 15, // espaçamento entre os cards
      alignItems: "center",
      justifyContent: "center",
      shadowRadius: { width: 0, height: 12 },
      shadowOpacity: 0.58,
      shadowRadius: 16,
      shadowColor: theme.shadow,
      elevation: 10,

    },
    newCard: {
      backgroundColor: theme.buttonSecundario,
      flex: 1,
      height: 129,
      borderRadius: 20,
      borderColor: theme.buttonSecundario,
      borderWidth: 1,
      marginHorizontal: 15, // espaçamento entre os cards
      alignItems: "center",
      justifyContent: "center",
      shadowRadius: { width: 0, height: 12 },
      shadowOpacity: 0.58,
      shadowRadius: 16,
      shadowColor: theme.shadow,
      elevation: 10,
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
    
    acoesRap: {
      backgroundColor: theme.buttonSecundario,
      borderRadius: 20,
      borderColor: theme.buttonSecundario,
      borderWidth: 1,
      width: 400,
      height: 110,
      marginHorizontal: 15,
      marginTop: 40,
      shadowRadius: { width: 0, height: 12 },
      shadowOpacity: 0.58,
      shadowRadius: 16,
      elevation: 10,
      shadowColor: theme.shadowColor,
    },
    textAcoes: {
      margin: 10,
      color: theme.text,
    },
    camera: {
      color: theme.icons,
    },
    alert: {
      color: theme.icons,
    },
    rowButtons: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 10,
      marginTop: 5,
    },

    botaoVerde: {
      flex: 1,
      borderRadius: 20,
      borderColor: "#46A329",
      borderWidth: 2,
      borderRadius: 12,
      paddingVertical: 10,
      marginHorizontal: 5,
      alignItems: "center",
      justifyContent: "center",
    },

    botaoVermelho: {
      flex: 1,
      borderRadius: 20,
      borderColor: "#B4060C",
      borderWidth: 2,
      borderRadius: 12,
      paddingVertical: 10,
      marginHorizontal: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    textBotaoVerm: {
      color: "#B4060C",
      fontSize: 16,
    },
    textoBotaoVerd: {
      color: "#46A329",
      fontSize: 16,
    },
  
//--------------------------------------------------------------------------------

    ativRapidas: {
      backgroundColor: theme.buttonSecundario,
      borderRadius: 20,
      borderColor: theme.buttonSecundario,
      borderWidth: 1,
      width: 400,
      height: 150,
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
    },
    textAtiv:{
      marginTop: 4,
      marginStart: 10,
      marginBottom:5,
      color: theme.text,
      fontSize: 11,

    },
    corBolinha1:{
      color: "#46A329",
    },
    corBolinha2:{
      color: "#B4060C"
    },
    corBolinha3:{
      color: "#4A7FA7"
    },
  });
