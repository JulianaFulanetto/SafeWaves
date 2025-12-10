import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import mqttService from "../src/services/mqttService"; // Importa o serviço MQTT
import { useThemeStyles } from "../hooks/useThemeStyles";

export default function AlertaScreen({ navigation }) {
  const styles = createStyles(useThemeStyles());
  const [alertas, setAlertas] = useState([]); // Lista de alertas recebidos via MQTT
  const [customMessage, setCustomMessage] = useState(""); // Mensagem personalizada do usuário

  useEffect(() => {
    let isMounted = true;

    // Conecta ao MQTT e adiciona mensagens recebidas ao estado
    mqttService.connect((message) => {
      if (isMounted) {
        setAlertas((prev) => [...prev, message]);
      }
    });

    // Envia alertas automáticos a cada 3 segundos
    const alertTypes = [
      { tipo: "gás", mensagem: "Nível alto de gás detectado!" },
      { tipo: "queda", mensagem: "Queda detectada!" },
      { tipo: "movimento", mensagem: "Movimento detectado!" },
    ];
    let alertIndex = 0;

    const interval = setInterval(() => {
      if (isMounted) {
        setAlertas((prev) => [...prev, alertTypes[alertIndex]]);
        alertIndex = (alertIndex + 1) % alertTypes.length; // Alterna entre os tipos de alerta
      }
    }, 3000);

    return () => {
      isMounted = false;
      clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    };
  }, []);

  // Adiciona uma mensagem personalizada ao estado
  const handleAddCustomAlert = () => {
    if (customMessage.trim() !== "") {
      const newAlert = { tipo: "personalizado", mensagem: customMessage };
      setAlertas((prev) => [...prev, newAlert]);
      setCustomMessage(""); // Limpa o campo de entrada
    }
  };

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

      <Text style={styles.alertTitle}>Alertas Recebidos:</Text>

      {/* Campo de entrada para mensagens personalizadas */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma mensagem de alerta..."
          value={customMessage}
          onChangeText={setCustomMessage}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddCustomAlert}
        >
          <Text style={styles.addButtonText}>Adicionar Alerta</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de alertas */}
      <FlatList
        data={alertas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.alertItem}>
            <Text style={styles.alertTipo}>Tipo: {item.tipo}</Text>
            <Text style={styles.alertMensagem}>{item.mensagem}</Text>
          </View>
        )}
      />
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
    alertTitle: {
      marginTop: 20,
      fontSize: 18,
      color: "#244F7E",
      fontWeight: "bold",
      marginLeft: 15,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      margin: 15,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: "#CCC",
      borderRadius: 10,
      padding: 10,
      marginRight: 10,
    },
    addButton: {
      backgroundColor: "#244F7E",
      padding: 10,
      borderRadius: 10,
    },
    addButtonText: {
      color: "#FFF",
      fontWeight: "bold",
    },
    alertItem: {
      backgroundColor: "#EEE",
      padding: 10,
      marginVertical: 5,
      marginHorizontal: 15,
      borderRadius: 10,
    },
    alertTipo: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#333",
    },
    alertMensagem: {
      fontSize: 14,
      color: "#555",
    },
  });
