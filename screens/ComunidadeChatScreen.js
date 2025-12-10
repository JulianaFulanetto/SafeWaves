import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useThemeStyles } from "../hooks/useThemeStyles";

export default function ComunidadeChatScreen({ navigation }) {
  const styles = createStyles(useThemeStyles());

  return (
    <View style={styles.container}>
      {/* SETA */}
      <View style={styles.top}>
        <TouchableOpacity
          style={styles.Flecha}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrow-left" size={30} color="#244F7E" />
        </TouchableOpacity>

        {/* TÍTULO */}
        <Text style={styles.Title}>Safewaves</Text>
        <Text style={styles.SubTitle}>Comunidade</Text>

        <View style={styles.line} />
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* BLOCO INICIAL */}
        <View style={styles.cardTop}>
          <Text style={styles.cardTopTitle}>Integração Comunitária</Text>
          <Text style={styles.cardTopDesc}>
            Conecte-se com vizinhos e instituições locais para uma segurança
            colaborativa
          </Text>
        </View>

        {/* BOTÕES DE FILTRO */}
        <View style={styles.filterRow}>
          <TouchableOpacity style={styles.filterBtn}>
            <Text
              style={styles.filterText}
              onPress={() => navigation.navigate("ComunidadeScreen")}
            >
              Vizinhos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterBtnSelected}>
            <Text style={styles.filterTextWhite}>Chat Comunitário</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.filterBtn}
            onPress={() => navigation.navigate("InstituicaoScreen")}
          >
            <Text style={styles.filterText}>Instituições</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.filterBtn}
            onPress={() => navigation.navigate("RedeScreen")}
          >
            <Text style={styles.filterText}>Redes</Text>
          </TouchableOpacity>
        </View>

        {/* TÍTULO CHAT */}
        <View style={styles.chatHeader}>
          <View style={styles.iconBubble}>
            <Feather name="message-square" size={20} color="#244F7E" />
          </View>

          <Text style={styles.chatTitle}>Chat da Comunidade</Text>

          <View style={styles.onlineBox}>
            <Text style={styles.onlineText}>2 online</Text>
          </View>
        </View>

        {/* INPUT */}
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Digite uma mensagem..."
          />

          <TouchableOpacity style={styles.sendBtn}>
            <Ionicons name="send" size={20} color="#244F7E" />
          </TouchableOpacity>
        </View>

        {/* MENSAGENS */}
        {/** 1 - João */}
        <View style={styles.msgCard}>
          <View style={styles.msgHeader}>
            <Image style={styles.userImg} />

            <View>
              <Text style={styles.msgName}>João Silva</Text>
              <Text style={styles.msgTag}>Alerta • 14:30</Text>
            </View>
          </View>

          <Text style={styles.msgText}>
            Pessoal, viram alguma movimentação estranha na Rua das Flores hoje à
            tarde?
          </Text>

          <View style={styles.msgFooter}>
            <Text style={styles.msgFooterText}>3 respostas</Text>
            <Text style={styles.msgFooterText}>2 curtidas</Text>
          </View>
        </View>

        {/* 2 - Maria */}
        <View style={styles.msgCard}>
          <View style={styles.msgHeader}>
            <Image style={styles.userImg} />

            <View>
              <Text style={styles.msgName}>Maria Santos</Text>
              <Text style={styles.msgTag}>Ajuda • 13:20</Text>
            </View>
          </View>

          <Text style={styles.msgText}>
            Boa tarde! Alguém tem o contato do eletricista que trabalhou na casa
            do Pedro?
          </Text>

          <View style={styles.msgFooter}>
            <Text style={styles.msgFooterText}>3 respostas</Text>
            <Text style={styles.msgFooterText}>2 curtidas</Text>
          </View>
        </View>

        {/* 3 - Pedro */}
        <View style={styles.msgCard}>
          <View style={styles.msgHeader}>
            <Image style={styles.userImg} />

            <View>
              <Text style={styles.msgName}>Pedro Costa</Text>
              <Text style={styles.msgTag}>Alerta • 11:25</Text>
            </View>
          </View>

          <Text style={styles.msgText}>
            ATENÇÃO: Carro suspeito circulando devagar pela região. Placa
            ABC-1234.
          </Text>

          <View style={styles.msgFooter}>
            <Text style={styles.msgFooterText}>3 respostas</Text>
            <Text style={styles.msgFooterText}>2 curtidas</Text>
          </View>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    top: {
      backgroundColor: theme.buttonSecundario,
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
      color: theme.title,
    },
    SubTitle: {
      marginTop: 0,
      marginLeft: 65,
      fontSize: 16,
      opacity: 0.5,
      color: theme.title,
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

    /* CARD TOPO */
    cardTop: {
      backgroundColor: theme.buttonSecundario,
      borderRadius: 15,
      padding: 15,
      borderWidth: 1,
      borderColor: theme.border,
    },

    cardTopTitle: {
      color: theme.text,
      fontWeight: "bold",
    },

    cardTopDesc: {
      color: theme.text,
      opacity: 0.7,
      fontSize: 12,
      marginTop: 5,
    },

    /* FILTROS */
    filterRow: {
      marginTop: 15,
      flexWrap: "wrap",
      flexDirection: "row",
      gap: 8,
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

    filterText: { color: theme.text, fontSize: 12 },
    filterTextWhite: { color: "#fff", fontSize: 12 },

    /* CHAT HEADER */
    chatHeader: {
      marginTop: 25,
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },

    iconBubble: {
      backgroundColor: theme.card,
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: theme.border,
    },

    chatTitle: {
      color: theme.text,
      fontWeight: "bold",
      fontSize: 15,
    },

    onlineBox: {
      backgroundColor: theme.card,
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderRadius: 12,
      marginLeft: "auto",
      borderWidth: 1,
      borderColor: theme.border,
    },

    onlineText: {
      color: theme.text,
      fontSize: 12,
    },

    /* INPUT */
    inputRow: {
      flexDirection: "row",
      marginTop: 15,
      alignItems: "center",
    },

    input: {
      flex: 1,
      backgroundColor: theme.card,
      height: 40,
      paddingHorizontal: 12,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: theme.border,
    },

    sendBtn: {
      marginLeft: 10,
      backgroundColor: theme.card,
      width: 40,
      height: 40,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: theme.border,
    },

    /* MENSAGENS */
    msgCard: {
      backgroundColor: theme.buttonSecundario,
      borderRadius: 15,
      padding: 15,
      borderWidth: 1,
      borderColor: theme.border,
      marginTop: 20,
    },

    msgHeader: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },

    userImg: {
      width: 45,
      height: 45,
      borderRadius: 25,
      backgroundColor: "#bcd", // temporário
    },

    msgName: {
      color: theme.text,
      fontWeight: "bold",
    },

    msgTag: {
      color: theme.text,
      opacity: 0.7,
      fontSize: 12,
    },

    msgText: {
      marginTop: 10,
      color: theme.text,
      fontSize: 13,
    },

    msgFooter: {
      marginTop: 15,
      flexDirection: "row",
      justifyContent: "space-between",
    },

    msgFooterText: {
      color: theme.text,
      opacity: 0.8,
      fontSize: 12,
    },
  });
