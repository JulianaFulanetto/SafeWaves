import { View, Text, StyleSheet, FlatList } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableOpacity, Alert } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useThemeStyles } from "../hooks/useThemeStyles";
import { TextInput } from "react-native-gesture-handler";
import React, { useState } from "react";

export default function AlertaScreen( { navigation }) {
  const styles = createStyles(useThemeStyles());

  const [alertText, setAlertText] = useState("");
  const [alertList, setAlertList] = useState([]);


  // Função p/ enviar alerta
  const addAlert = () => {
    if (alertText.trim().length === 0) {
      Alert.alert("Aviso", "Digite um alerta antes de enviar!");
      return;
    }

 
    Alert.alert("Alerta enviado", alertText);

    setAlertList((prev) => [
      ...prev,
      { id: Date.now().toString(), text: alertText.trim() },
    ]);

    setAlertText(""); // limpa o campo
  };

 
  const renderAlert = ({ item }) => (
    <View style={styles.alertItem}>
      <Text style={styles.alertText}>{item.text}</Text>
    </View>
  );

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

      <View style={styles.emerg}>
        <Ionicons
          name="create-outline"
          size={24}
          color="#FFFFFF"
          style={styles.searchIcon}
        />

        <View style={styles.seachContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Pesquisar alertas..."
            placeholderTextColor="#999"
            value={alertText}            
            onChangeText={setAlertText}   
          />
        </View>

        <View style={styles.rowButtons}>
          <TouchableOpacity
            style={styles.botaoVermelho}
            onPress={addAlert}           
          >
            <Text style={styles.textBotaoVerm}>
              <Ionicons name="notifications-outline" size={15} color="#FFFFFF" />
              {"  "}
              Emergência
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ---------------- HISTÓRICO DE ALERTAS ---------------- */}
      <Text style={{ marginLeft: 20, marginTop: 20, fontWeight: "bold", color: "#244F7E" }}>
        Histórico de Alertas
      </Text>

      <FlatList
        data={alertList}
        keyExtractor={(item) => item.id}
        renderItem={renderAlert}
        style={{ marginTop: 10 }}
      />
      {/* -------------------------------------------------------- */}
    </View>
  );
}


const extraStyles = {
  alertItem: {
    backgroundColor: "#EEE",
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 8,
    borderRadius: 10,
  },
  alertText: {
    color: "#333",
    fontSize: 14,
  },
};
// ----------------------------------------------------------------------------------------


const createStyles = (theme) =>
  StyleSheet.create({
    ...extraStyles,
    container: {
      backgroundColor: theme.background,
      flex: 1,
    },
    top:{
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
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.58,
      shadowRadius: 16,
      elevation: 10,
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
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.58,
      shadowRadius: 16,
      elevation: 10,
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
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.58,
      shadowRadius: 16,
      elevation: 10,
    },

    subNomeCardVerm: {
      color: theme.bordaverm,
      fontSize: 11,
      height: 25,
    },

    subNomeCardVerd: {
      color: theme.bordaverd,
      fontSize: 11,
      height: 25,
    },

    subNomeCardAzul: {
      color: theme.bordaazul,
      fontSize: 11,
      height: 25,
    },

    numVerm: {
      color: theme.bordaverm,
      fontSize: 30,
      fontWeight: "bold",
      height: 50,
    },

    numVerd: {
      color: theme.bordaverd,
      fontSize: 30,
      fontWeight: "bold",
      height: 50,
    },

    numAzul: {
      color: theme.bordaazul,
      fontSize: 30,
      fontWeight: "bold",
      height: 50,
    },

    emerg: {
      backgroundColor: theme.buttonSecundario,
      borderRadius: 20,
      borderColor: theme.border,
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

    rowButtons: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 10,
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

    searchBar: {
      borderRadius: 10,
      margin: 10,
      left: 60,
      marginTop: 20,
      marginBottom: 1,
      borderColor: "#9BA1A9",
      borderWidth: 1,
      width: "75%",
      paddingHorizontal: 15,
      paddingVertical: 5,
      fontSize: 10,
    },

    searchIcon: {
      position: "absolute",
      top: 20,
      left: 20,
    },
  });
