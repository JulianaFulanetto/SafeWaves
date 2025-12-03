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
  
  export default function RedeScreen({ navigation }) {
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
            onPress={() => navigation.goBack()} // Adiciona funcionalidade de voltar
          />
  
          <Text style={styles.Title}>SafeWaves</Text>
          <Text style={styles.SubTitle}>Comunidade</Text>
          <View style={styles.line} />
        </View>
  
        <View style={{ flex: 1 }}>
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
              <TouchableOpacity style={styles.filterBtn} activeOpacity={0.7}
              onPress={() => navigation.navigate("ComunidadeScreen")}
              >
                <Text style={styles.filterText}>Vizinhos</Text>
              </TouchableOpacity>
  
              <TouchableOpacity
                style={styles.filterBtn}
                activeOpacity={0.7}
                onPress={() => navigation.navigate("ComunidadeChatScreen")}
              >
                <Text style={styles.filterText}>Chat Comunitário</Text>
              </TouchableOpacity>
  
              <TouchableOpacity
                style={styles.filterBtn}
                activeOpacity={0.7}
                onPress={() => navigation.navigate("InstituicaoScreen")}
              >
                <Text style={styles.filterText}>Instituições</Text>
              </TouchableOpacity>
  
              <TouchableOpacity style={styles.filterBtnSelected} activeOpacity={0.7}>
                <Text style={styles.filterTextWhite}>Rede de confiança</Text>
              </TouchableOpacity>
            </View>
  
            {/* TÍTULO */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Redes de Confiança</Text>
            </View>
  
            {/* ======= CARDS PRINCIPAIS ======= */}
            <View style={styles.metricCard}>
              <Text style={styles.metricNumber}>1</Text>
              <Text style={styles.metricLabel}>Vizinhos Conectados</Text>
            </View>
  
            <View style={styles.metricCard}>
              <Text style={[styles.metricNumber, styles.greenNumber]}>2</Text>
              <Text style={styles.metricLabel}>Instituições Parceiras</Text>
            </View>
  
            <View style={styles.metricCard}>
              <Text style={[styles.metricNumber, styles.redNumber]}>92%</Text>
              <Text style={styles.metricLabel}>Nível de Confiança</Text>
            </View>
  
            {/* ======= ATIVIDADES RECENTES ======= */}
            <Text style={styles.sectionTitle}>Atividade Recente da Rede</Text>
  
            {/* Exemplo 1 */}
            <View style={styles.activityCard}>
              <View style={styles.activityLeft}>
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/1828/1828470.png",
                  }}
                  style={styles.activityIcon}
                />
                <Text style={styles.activityText}>
                  João Silva se conectou à rede
                </Text>
              </View>
              <Text style={styles.timeText}>2h atrás</Text>
            </View>
  
            {/* Exemplo 2 */}
            <View style={styles.activityCard}>
              <View style={styles.activityLeft}>
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/1827/1827385.png",
                  }}
                  style={styles.activityIcon}
                />
                <Text style={styles.activityText}>
                  Nova mensagem no chat comunitário
                </Text>
              </View>
              <Text style={styles.timeText}>3h atrás</Text>
            </View>
  
            {/* Exemplo 3 */}
            <View style={styles.activityCard}>
              <View style={styles.activityLeft}>
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/1827/1827301.png",
                  }}
                  style={styles.activityIcon}
                />
                <Text style={styles.activityText}>
                  Alerta de segurança compartilhado
                </Text>
              </View>
              <Text style={styles.timeText}>5h atrás</Text>
            </View>
          </ScrollView>
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
        marginTop: 10,
        marginHorizontal: 0,
        borderBottomWidth: 1,
        borderBottomColor: theme.title,
      },
      scroll: {
        marginTop: 10,
        paddingHorizontal: 15,
      },
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



      metricCard: {
        width: "100%",
        backgroundColor: "#0B2345",
        paddingVertical: 22,
        borderRadius: 12,
        alignItems: "center",
        marginBottom: 14,
      },
      metricNumber: {
        fontSize: 28,
        fontWeight: "700",
        color: "#FFFFFF",
      },
      metricLabel: {
        fontSize: 13,
        color: "#9CB3D1",
        marginTop: 6,
      },
      greenNumber: {
        color: "#4CE37A",
      },
      redNumber: {
        color: "#E34C4C",
      },
      sectionTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#FFFFFF",
        marginTop: 20,
        marginBottom: 12,
      },
      activityCard: {
        backgroundColor: "#0B2345",
        width: "100%",
        paddingVertical: 18,
        paddingHorizontal: 16,
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
      },
      activityLeft: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10, // Substitui o gap
      },
      activityText: {
        color: "#FFFFFF",
        fontSize: 14,
        maxWidth: "75%",
      },
      timeText: {
        fontSize: 12,
        color: "#9CB3D1",
      },
      activityIcon: {
        width: 20,
        height: 20,
        opacity: 0.8,
      },
    });