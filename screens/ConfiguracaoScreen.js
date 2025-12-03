
import { View, Text, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useThemeStyles } from "../hooks/useThemeStyles"; // Importa o hook personalizado
import { useState } from "react";

export default function ConfiguracaoScreen() {
  const styles = createStyles(useThemeStyles());
  const theme = useThemeStyles();


 const [portaTravada, setPortaTravada] = useState(true);
 const [cortinaAberta, setCortinaAberta] = useState(true);
 const [luzDesligada, setluzDesligada] = useState(true);



  return (
    <View style={styles.container}>
        <View style={styles.top}>
      <AntDesign style={styles.Flecha} name="arrow-left" size={30} color="#244F7E" />
      <Text style={styles.Title}>SafeWaves</Text>
      <Text style={styles.SubTitle}>Configuração</Text>
      <View style={styles.line} />
              </View>

        <View style={styles.control}>
        <Text style={styles.tituloControl}>
          Controle de Dispositivos</Text>

<View style={styles.card1}>
  <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "90%" }}>
    <View>
      <Text style={{ fontWeight: "bold", color: theme.text, paddingHorizontal: 15, marginTop: 10 }}>Porta Principal</Text>
      <Text style={{ color: portaTravada ? "green" : "red", paddingHorizontal: 15 }}>
        {portaTravada ? "Travado" : "Destravado"}
      </Text>
    </View>

    <View>
      <Text
        onPress={() => setPortaTravada(!portaTravada)}
        style={{
          backgroundColor: theme.buttonPrincipal,
          marginTop: 10,
          paddingHorizontal: 20,
          paddingVertical: 8,
          borderRadius: 15,
          color: "white",
        }}
      >
        Alternar
      </Text>
    </View>
  </View>
</View>


<View style={styles.card2}>
  <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "90%" }}>
    <View>
      <Text style={{ fontWeight: "bold", color: theme.text, paddingHorizontal: 15, marginTop: 10 }}>Cortina Sala</Text>
      <Text style={{ color: cortinaAberta ? "green" : "red", paddingHorizontal: 15 }}>
        {cortinaAberta ? "Fechado" : "Aberto"}
      </Text>
    </View>

    <View>
      <Text
        onPress={() => setCortinaAberta(!cortinaAberta)}
        style={{
          backgroundColor: theme.buttonPrincipal,
          marginTop: 10,
          paddingHorizontal: 20,
          paddingVertical: 8,
          borderRadius: 15,
          color: "white",
        }}
      >
        Alternar
      </Text>
    </View>
  </View>
</View>

<View style={styles.card3}>
  <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "90%" }}>
    <View>
      <Text style={{ fontWeight: "bold", color: theme.text, paddingHorizontal: 15, marginTop: 10 }}>Cortina Sala</Text>
      <Text style={{ color: luzDesligada ? "green" : "red", paddingHorizontal: 15 }}>
        {luzDesligada ? "Ligado" : "Desligado"}
      </Text>
    </View>

    <View>
      <Text
        onPress={() => setluzDesligada(!luzDesligada)}
        style={{
          backgroundColor: theme.buttonPrincipal,
          marginTop: 10,
          paddingHorizontal: 20,
          paddingVertical: 8,
          borderRadius: 15,
          color: "white",
        }}
      >
        Alternar
      </Text>
    </View>
  </View>
</View>

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

//-----------------------------------------

   control: {
      backgroundColor: theme.buttonSecundario,
      borderRadius: 20,
      width: 400,
      marginHorizontal: 15,
      marginTop: 30,
      shadowRadius: { width: 0, height: 12 },
      shadowOpacity: 0.58,
      shadowRadius: 16,
      elevation: 10,
      shadowColor: theme.shadowColor,
      justifyContent: 'center',
      alignItems: 'center'
    },

    tituloControl: {
      margin: 10,
      color: theme.text,
    },

    card1: {
      backgroundColor: theme.background,
      borderColor: theme.border,
      borderWidth: 2,
      borderRadius: 20,
      width: 380,
      height:60,
      marginTop: 25,
    },
    
    card2: {
      backgroundColor: theme.background,
      borderColor: theme.border,
      borderWidth: 2,
      borderRadius: 20,
      width: 380,
      height:60,
      marginTop: 25
    },

    card3: {
      backgroundColor: theme.background,
      borderColor: theme.border,
      borderWidth: 2,
      borderRadius: 20,
      width: 380,
      height:60,
      marginTop: 25,
      marginBottom: 25
    },
});

