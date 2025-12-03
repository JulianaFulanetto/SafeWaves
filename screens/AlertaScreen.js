import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import mqttService from "../src/services/mqttService"; // Importa o serviço MQTT
import { useThemeStyles } from "../hooks/useThemeStyles";

export default function AlertaScreen({ navigation }) {
  const styles = createStyles(useThemeStyles());
  const [alertas, setAlertas] = useState([]); // Lista de alertas recebidos via MQTT

  useEffect(() => {
    // Conecta ao MQTT e recebe mensagens
    mqttService.connect((message) => {
      setAlertas((prev) => [...prev, message]); // Adiciona a mensagem recebida à lista de alertas
    });
  }, []);

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
        <Text style={styles.SubTitle}>Alertas</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.row}>
        <View style={styles.red}>
          <Text style={styles.numVerm}>85</Text>
          <Text style={styles.subNomeCardVerm}>Alertas Ativos</Text>
        </View>

        <View style={styles.green}>
          <Text style={styles.numVerd}>25</Text>
          <Text style={styles.subNomeCardVerd}>Resolvidos</Text>
        </View>

        <View style={styles.blue}>
          <Text style={styles.numAzul}>25</Text>
          <Text style={styles.subNomeCardAzul}>Total</Text>
        </View>
      </View>

      <View style={styles.acoesRap}>
        <Text style={styles.textAcoes}>Ações Rápidas</Text>

        {/* Barra de pesquisa */}
        <TextInput
          style={styles.searchBar}
          placeholder="Pesquisar alertas..."
          placeholderTextColor="#999"
        />

        <View style={styles.rowButtons}>
          <TouchableOpacity
            style={styles.botaoVermelho}
            onPress={() => {
              // Simula o envio de um alerta via MQTT
              console.log("Botão de emergência pressionado!");
            }}
          >
            <Ionicons name="notifications-outline" size={15} color="#FFFFFF" />
            <Text style={styles.textBotaoVerm}> Emergência</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Lista de alertas recebidos via MQTT */}
      <Text
        style={{
          marginTop: 20,
          fontSize: 18,
          color: "#244F7E",
          fontWeight: "bold",
        }}
      >
        Alertas Recebidos:
      </Text>
      {alertas.map((alerta, index) => (
        <View key={index} style={styles.alertItem}>
          <Text style={styles.alertText}>{alerta}</Text>
        </View>
      ))}
    </View>
  );
}

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      flex: 1,
      padding: 20,
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
      borderBottomWidth: 1,
      borderBottomColor: theme.title,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
    },
    red: {
      backgroundColor: theme.vermelho,
      flex: 1,
      height: 129,
      borderRadius: 20,
      borderColor: theme.bordaverm,
      borderWidth: 1,
      marginHorizontal: 15,
      alignItems: "center",
      justifyContent: "center",
    },
    numVerm: {
    color: theme.bordaverm,
    },
    subNomeCardVerm:{
      color: theme.bordaverm,
    },
    green: {
      backgroundColor: theme.verde,
      flex: 1,
      height: 129,
      borderRadius: 20,
      borderColor: theme.bordaverd,
      borderWidth: 1,
      marginHorizontal: 15,
      alignItems: "center",
      justifyContent: "center",
    },
    numVerd: {
      color: theme.bordaverd,
      },
      subNomeCardVerd:{
        color: theme.bordaverd,
      },
    blue: {
      backgroundColor: theme.azul,
      flex: 1,
      height: 129,
      borderRadius: 20,
      borderColor: theme.bordaazul,
      borderWidth: 1,
      marginHorizontal: 15,
      alignItems: "center",
      justifyContent: "center",
    },
    numAzul: {
      color: theme.bordaazul,
      },
      subNomeCardAzul:{
        color: theme.bordaazul,
      },
    acoesRap: {
      backgroundColor: theme.buttonSecundario,
      borderRadius: 20,
      borderColor: theme.buttonSecundario,
      borderWidth: 1,
      width: "100%",
      height: 150,
      marginTop: 40,
      padding: 10,
    },
    textAcoes: {
      marginBottom: 10,
      color: theme.text,
      fontSize: 16,
    },
    searchBar: {
      backgroundColor: "#FFFFFF",
      borderRadius: 10,
      paddingHorizontal: 15,
      paddingVertical: 8,
      marginBottom: 10,
      fontSize: 16,
      color: "#000",
    },
    rowButtons: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 5,
    },
    botaoVermelho: {
      width: "100%",
      backgroundColor: theme.bordaverm,
      borderRadius: 100,
      paddingVertical: 10,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      top: 12,
    },
    textBotaoVerm: {
      color: "#FFFFFF",
      fontSize: 12,
    },
    alertItem: {
      backgroundColor: "#EEE",
      padding: 10,
      marginVertical: 5,
      borderRadius: 10,
    },
    alertText: {
      color: "#333",
      fontSize: 14,
    },
  });
