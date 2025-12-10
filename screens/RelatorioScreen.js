import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useThemeStyles } from "../hooks/useThemeStyles";

export default function RelatorioScreen({ navigation }) {
  const styles = createStyles(useThemeStyles());

  return (
    <View style={styles.container}>
      <View style={styles.top}>
      {/* Header */}
    <AntDesign
        style={styles.Flecha}
        name="arrow-left"
        size={30}
        color="#244F7E"
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.Title}>SafeWaves</Text>
      <Text style={styles.SubTitle}>Relatório</Text>
      <View style={styles.line} />
        </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20 }}>

        {/* CARD PRINCIPAL - RELATÓRIO DE SEGURANÇA */}
        <View style={styles.bigCard}>
          <Text style={styles.cardTitle}>Relatório de Segurança</Text>
          <Text style={styles.cardSub}>
            Indicadores atualizados das operações de segurança
          </Text>

          <View style={styles.rowStats}>
            <View>
              <Text style={styles.statNum}>13</Text>
              <Text style={styles.statLabel}>Incidentes</Text>
            </View>

            <View>
              <Text style={styles.statNumGreen}>85%</Text>
              <Text style={styles.statLabel}>Taxa Resolvida</Text>
            </View>
          </View>

          <View style={styles.rowStats}>
            <View>
              <Text style={styles.statNum}>2.3h</Text>
              <Text style={styles.statLabel}>Tempo Médio Resolução</Text>
            </View>

            <View>
              <Text style={styles.statNumGreen}>94%</Text>
              <Text style={styles.statLabel}>Urgência Solucionada</Text>
            </View>
          </View>
        </View>

        {/* FILTROS */}
        <View style={styles.rowTabs}>
          <TouchableOpacity style={styles.tabButtonActive}>
            <Text style={styles.tabTextActive}>Visão Geral</Text>
          </TouchableOpacity>

        </View>

        {/* GRÁFICO FALSO */}
        <View style={styles.graphCard}>
          <Text style={styles.cardTitle}>Incidentes da Semana</Text>
          

          <Image
            style={styles.graphFake}
            resizeMode="cover"
            source={require("../assets/graficc.jpg")}
          />
        </View>

        {/* OUTRO GRÁFICO */}
        <View style={styles.graphCard}>
          <Text style={styles.cardTitle}>Pontos de Atividade por Horas</Text>
         <Image
            style={styles.graphFake}
            resizeMode="cover"
            source={require("../assets/grafico.png")}
          />
        </View>

        {/* CARD DE NOTIFICAÇÕES */}
        <View style={styles.notificationsCard}>
          <View style={styles.notifyGreen}>
            <Text style={styles.notifyTitle}>Ponto Seguro Identificado</Text>
            <Text style={styles.notifyText}>
              Área com baixa incidência de alertas e boa eficácia de monitoramento.
            </Text>
          </View>

          <View style={styles.notifyRed}>
            <Text style={styles.notifyTitle}>Zona de Alerta</Text>
            <Text style={styles.notifyText}>
              Aumento de movimentos suspeitos nas últimas 12h. Continue monitorando.
            </Text>
          </View>

          <View style={styles.notifyBlue}>
            <Text style={styles.notifyTitle}>Índice de Performance</Text>
            <Text style={styles.notifyText}>
              Melhora significativa nos últimos dias em resolução de alertas.
            </Text>
          </View>
        </View>

        {/* PREVISÕES */}
        <View style={styles.predictCard}>
          <Text style={styles.cardTitle}>Previsões de Segurança</Text>

          <View style={styles.predictGreen}>
            <Text style={styles.predictTitle}>Baixo</Text>
            <Text style={styles.predictDesc}>
              Risco previsto para os próximos 7 dias
            </Text>
          </View>

          <View style={styles.predictRed}>
            <Text style={styles.predictTitle}>3–5</Text>
            <Text style={styles.predictDesc}>
              Alertas previstos para a semana
            </Text>
          </View>

          <View style={styles.predictBlue}>
            <Text style={styles.predictTitle}>95%</Text>
            <Text style={styles.predictDesc}>
              Confiabilidade do modelo preditivo
            </Text>
          </View>
        </View>

        <View style={{ height: 80 }} />
      </ScrollView>
    </View>
  );
}

// STYLES
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
    
    /** CARD PRINCIPAL */
    bigCard: {
      backgroundColor: theme.buttonSecundario,
      marginHorizontal: 15,
      borderRadius: 15,
      padding: 20,
      marginBottom: 20,
      
      
      shadowRadius: { width: 0, height: 12 },
      shadowOpacity: 0.58,
      shadowRadius: 16,
      shadowColor: theme.shadow,
    },

    cardTitle: {
      color: theme.text,
      fontSize: 17,
      fontWeight: "bold",
    },

    cardSub: {
      color: theme.text,
      opacity: 0.7,
      marginBottom: 15,
      fontSize: 12,
    },

    rowStats: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 15,
    },

    statNum: {
      fontSize: 20,
      fontWeight: "bold",
      color: theme.text,
    },

    statNumGreen: {
      fontSize: 20,
      fontWeight: "bold",
      color: theme.bordaverd,
      paddingHorizontal: 50
    },

    statLabel: {
      fontSize: 12,
      opacity: 0.7,
      color: theme.text,
    },

    /** TABS */
    rowTabs: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginBottom: 20,
      marginHorizontal: 10,
    },

    tabButton: {
      paddingVertical: 7,
      paddingHorizontal: 12,
      
      borderRadius: 10,
      
      backgroundColor: theme.buttonSecundario,
    },

    tabButtonActive: {
      paddingVertical: 7,
      paddingHorizontal: 12,
      borderRadius: 10,
      backgroundColor: theme.border,
    },

    tabText: {
      color: theme.text,
      opacity: 0.8,
    },

    tabTextActive: {
      color: theme.text,
      fontWeight: "bold",
    },

    /** GRÁFICOS */
    graphCard: {
      backgroundColor: theme.card,
      marginHorizontal: 15,
      borderRadius: 15,
      padding: 15,
      marginBottom: 20,
      
      
    },

    graphFake: {
      width: "100%",
      height: 200,
      borderRadius: 10,
      backgroundColor: theme.buttonSecundario,
      marginTop: 10,
    },

    /** NOTIFICAÇÕES */
    notificationsCard: {
      marginHorizontal: 15,
      marginBottom: 25,
      gap: 15,
    },

    notifyGreen: {
      backgroundColor: theme.notifverde,
      padding: 15,
      borderRadius: 12,
    },

    notifyRed: {
      backgroundColor: theme.notifvermelho,
      padding: 15,
      borderRadius: 12,
    },

    notifyBlue: {
      backgroundColor: theme.notifazul,
      padding: 15,
      borderRadius: 12,
    },

    notifyTitle: {
      fontWeight: "bold",
      color: "#fff",
      fontSize: 14,
    },

    notifyText: {
      color: "#fff",
      marginTop: 5,
      fontSize: 12,
      opacity: 0.9,
    },

    /** PREVISÕES */
    predictCard: {
      backgroundColor: theme.card,
      marginHorizontal: 15,
      borderRadius: 15,
      padding: 15,
      marginBottom: 30,
      
      
    },

    predictGreen: {
      marginTop: 5,
      backgroundColor: theme.notifverde,
      padding: 15,
      borderRadius: 12,
      marginBottom: 10,
    },

    predictRed: {
      backgroundColor: theme.notifvermelho,
      padding: 15,
      borderRadius: 12,
      marginBottom: 10,
    },

    predictBlue: {
      backgroundColor: theme.notifazul,
      padding: 15,
      borderRadius: 12,
    },

    predictTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#fff",
    },

    predictDesc: {
      color: "#fff",
      opacity: 0.9,
      fontSize: 12,
    },
  });
