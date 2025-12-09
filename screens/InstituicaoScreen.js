import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useThemeStyles } from "../hooks/useThemeStyles";

export default function InstituicaoScreen({ navigation }) {
  const theme = useThemeStyles();
  const styles = createStyles(theme);

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
          <TouchableOpacity
            style={styles.filterBtn}
            onPress={() => navigation.navigate("ComunidadeScreen")}
          >
            <Text style={styles.filterText}>Vizinhos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.filterBtn}
            onPress={() => navigation.navigate("ComunidadeChatScreen")}
          >
            <Text style={styles.filterText}>Chat Comunitário</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.filterBtnSelected}
            onPress={() => navigation.navigate("InstituicaoScreen")}
          >
            <Text style={styles.filterTextWhite}>Instituições</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.filterBtn}
            onPress={() => navigation.navigate("RedeScreen")}
          >
            <Text style={styles.filterText}>Rede</Text>
          </TouchableOpacity>
        </View>

        {/* TÍTULO */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Instituições Conectadas</Text>
        </View>

        {/* LISTA (MESMO ESTILO DE "CHAT DA COMUNIDADE") */}
        {instituicoes.map((item, index) => (
          <View key={index} style={styles.itemBox}>
            <View style={styles.itemRow}>
              <Image style={styles.itemImg} />

              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.nome}</Text>
                <Text style={styles.itemSub}>{item.endereco}</Text>
                <Text style={styles.itemSub}>{item.telefone}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.btnAbrir}>
              <Text style={styles.btnAbrirTxt}>Ver detalhes</Text>
            </TouchableOpacity>
          </View>
        ))}

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

/* DADOS */
const instituicoes = [
  {
    nome: "Escola Municipal Santos Dumont",
    endereco: "Av. Principal, 100",
    telefone: "(11) 3333-1234",
  },
  {
    nome: "Supermercado Bom Preço",
    endereco: "Rua do Comércio, 45",
    telefone: "(11) 3333-5678",
  },
  {
    nome: "Padaria Sonhos",
    endereco: "Rua das Flores, 22",
    telefone: "(11) 2222-9988",
  },
];

/* ESTILOS — IGUAL AO ESTILO DA IMAGEM DO CHAT */
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
      fontSize: 12,
    },

    introCard: {
      backgroundColor: theme.buttonPrincipal,
      padding: 15,
      borderRadius: 15,
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },

    introTitle: {
      fontSize: 16,
      color: theme.text,
      fontWeight: "bold",
    },

    introDesc: {
      color: theme.text,
      opacity: 0.8,
      marginTop: 5,
      fontSize: 12,
    },

    filterRow: {
      flexDirection: "row",
      marginTop: 20,
      gap: 8,
      flexWrap: "wrap",
    },

    filterTxt: {
      color: theme.text,
      fontSize: 12,
    },

    filterTxtSelected: {
      color: "white",
      fontSize: 12,
    },

    sectionHeader: {
      marginTop: 25,
    },

    sectionTitle: {
      color: theme.text,
      fontSize: 17,
      fontWeight: "bold",
    },

    itemBox: {
      backgroundColor: theme.buttonSecundario,
      padding: 15,
      borderRadius: 15,
      marginTop: 20,
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
    },

    itemRow: {
      flexDirection: "row",
      alignItems: "center",
    },

    itemImg: {
      width: 45,
      height: 45,
      borderRadius: 22,
      backgroundColor: "#bcd",
      marginRight: 10,
    },

    itemInfo: {
      flex: 1,
    },

    itemName: {
      fontSize: 15,
      fontWeight: "bold",
      color: theme.text,
    },

    itemSub: {
      fontSize: 12,
      color: theme.text,
      opacity: 0.6,
    },

    btnAbrir: {
      marginTop: 12,
      backgroundColor: theme.azul,
      paddingVertical: 8,
      borderRadius: 10,
      alignItems: "center",
    },

    btnAbrirTxt: {
      color: "white",
      fontWeight: "bold",
      fontSize: 13,
    },
  });
