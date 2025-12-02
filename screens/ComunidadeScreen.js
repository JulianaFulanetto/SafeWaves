
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { useThemeStyles } from "../hooks/useThemeStyles";


export default function CommunityScreen({ navigation }) {
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
      <Text style={styles.SubTitle}>Comunidade</Text>
      <View style={styles.line} />
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* ------------------------------------------------------------- */}
        {/* BLOCO DE INTEGRAÇÃO COMUNITÁRIA */}
        <View style={styles.cardTop}>
          <Text style={styles.cardTopTitle}>Integração Comunitária</Text>
          <Text style={styles.cardTopDesc}>
            Conecte-se com vizinhos e instituições locais para uma segurança
            colaborativa
          </Text>
        </View>

        {/* ------------------------------------------------------------- */}
        {/* BARRA DE FILTROS */}
        <View style={styles.filterRow}>
          <TouchableOpacity style={styles.filterBtnSelected}>
            <Text style={styles.filterTextWhite}>Vizinhos</Text>
          </TouchableOpacity>

          <TouchableOpacity
  style={styles.filterBtn}
  onPress={() => navigation.navigate("ComunidadeChatScreen")}
>
  <Text style={styles.filterText}>Chat Comunitário</Text>
</TouchableOpacity>


          <TouchableOpacity style={styles.filterBtn}>
            <Text style={styles.filterText}>Instituições</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterBtn}>
            <Text style={styles.filterText}>Rede de confiança</Text>
          </TouchableOpacity>
        </View>

        {/* TÍTULO */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Vizinhos Conectados</Text>

          <TouchableOpacity style={styles.inviteBtn}>
            <Text style={styles.inviteText}>Convidar vizinho +</Text>
          </TouchableOpacity>
        </View>

        {/* ------------------------------------------------------------- */}
        {/* LISTA DE VIZINHOS */}
        <View style={styles.userCard}>
          <View style={styles.userHeader}>
            {/* FOTO */}
            <Image
              style={styles.userImg}
              
            />

            {/* INFO */}
            <View style={styles.userInfo}>
              <Text style={styles.userName}>João Silva</Text>
              <Text style={styles.userAddress}>Rua das Flores, 13</Text>
              <Text style={styles.userPhone}>(11) 99999-1234</Text>
            </View>
          </View>

          {/* STATUS */}
          <View style={styles.statusRow}>
            <View style={styles.statusOnline}>
              <Text style={styles.statusText}>Online</Text>
            </View>

            <Text style={styles.since}>Desde 2023-01-15</Text>
          </View>

          {/* BOTÕES */}
          <View style={styles.actionsRow}>
            <TouchableOpacity style={styles.chatBtn}>
              <Feather name="message-circle" size={18} color="#B3CFE5" />
              <Text style={styles.actionText}>Chat</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.callBtn}>
              <Feather name="phone-call" size={18} color="#B3CFE5" />
              <Text style={styles.actionText}>Ligar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ------------------------------------------------------------- */}
        {/* SEGUNDO VIZINHO */}
        <View style={styles.userCard}>
          <View style={styles.userHeader}>
            <Image
              style={styles.userImg}
            />

            <View style={styles.userInfo}>
              <Text style={styles.userName}>Maria Santos</Text>
              <Text style={styles.userAddress}>Rua das Flores, 22</Text>
              <Text style={styles.userPhone}>(11) 99999-5678</Text>
            </View>
          </View>

          <View style={styles.statusRow}>
            <View style={styles.statusOffline}>
              <Text style={styles.statusText}>Offline</Text>
            </View>

            <Text style={styles.since}>Desde 2023-02-10</Text>
          </View>

          <View style={styles.actionsRow}>
            <TouchableOpacity style={styles.chatBtn}>
              <Feather name="message-circle" size={18} color="#B3CFE5" />
              <Text style={styles.actionText}>Chat</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.callBtn}>
              <Feather name="phone-call" size={18} color="#B3CFE5" />
              <Text style={styles.actionText}>Ligar</Text>
            </TouchableOpacity>
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

    scroll: {
      marginTop: 10,
      paddingHorizontal: 15,
    },

    /* --------------------------- CARD TOP --------------------------- */
    cardTop: {
      backgroundColor: theme.buttonSecundario,
      borderRadius: 15,
      padding: 15,

    },

    cardTopTitle: {
      color: theme.text,
      fontSize: 14,
      fontWeight: "bold",
    },

    cardTopDesc: {
      color: theme.text,
      opacity: 0.7,
      marginTop: 5,
      fontSize: 12,
    },

    /* --------------------------- FILTER BAR --------------------------- */
    filterRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 20,
      gap: 10,
    },

    filterBtn: {
      backgroundColor: theme.card,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 12,

    },

    filterBtnSelected: {
      backgroundColor: "#244F7E",
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 12,
    },

    filterText: {
      color: theme.text,
      fontSize: 12,
    },

    filterTextWhite: {
       color: "#fff", 
       fontSize: 12
     },

    /* ------------------------ TITLE + BUTTON -------------------------- */
    sectionHeader: {
      marginTop: 25,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    sectionTitle: {
      color: theme.text,
      fontSize: 16,
      fontWeight: "bold",
    },

    inviteBtn: {
      backgroundColor: theme.card,
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderRadius: 12,

    },

    inviteText: {
      color: theme.text,
      fontSize: 12,
    },

    /* ----------------------------- USER CARD ----------------------------- */
    userCard: {
      backgroundColor: theme.buttonSecundario,
      borderRadius: 15,
      padding: 15,
      marginTop: 20,
    },

    userHeader: {
      flexDirection: "row",
      alignItems: "center",
    },

    userImg: {
      width: 45,
      height: 45,
      borderRadius: 25,
      marginRight: 10,
    },

    userInfo: {
      flexDirection: "column",
    },

    userName: {
      color: theme.text,
      fontWeight: "bold",
    },

    userAddress: {
      color: theme.text,
      fontSize: 11,
      opacity: 0.7,
    },

    userPhone: {
      color: theme.text,
      fontSize: 11,
      opacity: 0.9,
    },

    /* ----------------------------- STATUS ----------------------------- */
    statusRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 10,
      gap: 10,
    },

    statusOnline: {
      backgroundColor: theme.verde,
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.bordaverd,
    },

    statusOffline: {
      backgroundColor: theme.vermelho,
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.bordaverm,
    },

    statusText: {
      color: theme.text,
      fontSize: 11,
    },

    since: {
      color: theme.text,
      fontSize: 11,
      opacity: 0.7,
    },

    /* ----------------------------- ACTION BUTTONS ----------------------------- */
    actionsRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },

    chatBtn: {
      flex: 1,
      backgroundColor: theme.azul,
      padding: 10,
      borderRadius: 10,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 5,
      marginRight: 8,
      
    },

    callBtn: {
      flex: 1,
      backgroundColor: theme.azul,
      padding: 10,
      borderRadius: 10,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 5,
      marginLeft: 8,
      
    },

    actionText: {
      color: theme.text,
      fontSize: 12,
    },
  });
