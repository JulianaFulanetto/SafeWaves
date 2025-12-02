import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { useThemeStyles } from "../hooks/useThemeStyles";

export default function ImagemScreen({ navigation }) {
  const styles = createStyles(useThemeStyles());

  return (
    <View style={styles.container}>
      {/* SETA */}
      <View style={styles.top}>
      <AntDesign
        style={styles.Flecha}
        name="arrow-left"
        size={30}
        color="#244F7E"
        onPress={() => navigation.goBack()}
      />

      {/* TÍTULO */}
      <Text style={styles.Title}>SafeWaves</Text>
      <Text style={styles.SubTitle}>Imagens</Text>
      <View style={styles.line} />
      </View>


      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* CARD DO VÍDEO */}
        <View style={styles.videoCard}>
          {/* ÍCONES DO TOPO */}
          <View style={styles.videoHeader}>
            <TouchableOpacity>
              <Feather name="expand" size={20} color="#B3CFE5" />
            </TouchableOpacity>

            <Feather name="wifi" size={20} color="#B3CFE5" />

            <TouchableOpacity>
              <Feather name="x" size={20} color="#B3CFE5" />
            </TouchableOpacity>
          </View>

          {/* IMAGEM DO VÍDEO */}
          <Image
            style={styles.videoImg}
            resizeMode="cover"
            source={require("../assets/captura.png")}
          />
        </View>

        {/* TÍTULO DA LISTA */}
        <Text style={styles.listTitle}>Câmeras disponíveis</Text>

        {/* CAMERA 1 */}
        <View style={styles.cameraCard}>
          <View>
            <Text style={styles.cameraName}>Câmera Principal</Text>
            <Text style={styles.cameraDesc}>Entrada Principal</Text>
          </View>

          <View style={styles.statusRow}>
            <View style={styles.statusOnline} />
            <Text style={styles.statusText}>Online</Text>
          </View>
        </View>

        {/* CAMERA 2 */}
        <View style={styles.cameraCard}>
          <View>
            <Text style={styles.cameraName}>Câmera Lateral</Text>
            <Text style={styles.cameraDesc}>Jardim</Text>
          </View>

          <View style={styles.statusRow}>
            <View style={styles.statusOnline} />
            <Text style={styles.statusText}>Online</Text>
          </View>
        </View>

        {/* CAMERA 3 */}
        <View style={styles.cameraCard}>
          <View>
            <Text style={styles.cameraName}>Câmera Traseira</Text>
            <Text style={styles.cameraDesc}>Quintal</Text>
          </View>

          <View style={styles.statusRow}>
            <View style={styles.statusOnline} />
            <Text style={styles.statusText}>Online</Text>
          </View>
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
      backgroundColor: theme.buttonSecundario
    },

    Flecha: {
      position: "absolute",
      top: 70,
      left: 20,
      zIndex: 10,
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

    scroll: {
      paddingHorizontal: 15,
      marginTop: 10,
    },

    /* ------------------------ VIDEO CARD ---------------------------- */

    videoCard: {
      backgroundColor: theme.card,
      borderRadius: 20,
      padding: 10,
      marginTop: 20,
      shadowColor: "#000",
      shadowOpacity: 0.4,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 6,
      elevation: 8,
    },

    videoHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 10,
      marginBottom: 10,
    },

    videoImg: {
      width: "100%",
      height: 200,
      borderRadius: 5,
    },

    /* ------------------------ LISTA DE CÂMERAS ---------------------------- */

    listTitle: {
      color: theme.text,
      fontSize: 16,
      marginTop: 25,
      marginBottom: 10,
      fontWeight: "bold",
    },

    cameraCard: {
      backgroundColor: theme.buttonSecundario,
      padding: 15,
      borderRadius: 15,
      marginTop: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      shadowColor: "#000",
      shadowOpacity: 0.3,
      shadowOffset: { width: 0, height: 3 },
      shadowRadius: 6,
      elevation: 5,
    },

    cameraName: {
      color: theme.text,
      fontSize: 14,
      fontWeight: "bold",
    },

    cameraDesc: {
      color: theme.text,
      opacity: 0.5,
      fontSize: 12,
      marginTop: 2,
    },

    statusRow: {
      flexDirection: "row",
      alignItems: "center",
    },

    statusOnline: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: theme.verde,
      marginRight: 6,
    },

    statusText: {
      color: theme.text,
      fontSize: 12,
    },
  });
