import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useThemeStyles } from "../hooks/useThemeStyles"; // Importa o hook personalizado

const MonitoramentoScreen = () => {
  const styles = createStyles(useThemeStyles()); 


  return (
    <View style={styles.container}>
      <AntDesign style={styles.Flecha} name="arrow-left" size={30} color="#244F7E" />
      <Text style={styles.Title}>SafeWaves</Text>
      <Text style={styles.SubTitle}>Monitoramento</Text>
      <View style={styles.line} />

      <View style={styles.cardGrande}>
<Text style={styles.CardTittle}>Sistema de Monitoramento</Text>
<Text style={styles.CardSubTittle}>última atualização</Text>

      </View>
    </View>
  );
}


const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
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
      color: theme.text,
    },
    SubTitle: {
      marginTop: 0,
      marginLeft: 65,
      fontSize: 16,
      opacity:0.5,
      
      color: theme.text,
    },
    line: {
     
      marginHorizontal: 0, // Margem lateral para ajustar o comprimento da linha
      borderBottomWidth: 0.5, // Espessura da linha
      width: "100%",
      height:1,
     
      backgroundColor: theme.border,
    },
    cardGrande:{
backgroundColor:theme.cardGrandeMonitoramento,
width:370,
height:325,
marginTop:20,
margin:20,
borderRadius:20,
    },
    CardSubTittle:{
      color:theme.SubcolorMonitoramento,
    },
    CardTittle:{
      color:theme.ColorMonitoramento,
    }
  });

export default MonitoramentoScreen;