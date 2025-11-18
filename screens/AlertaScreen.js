import { View, Text, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableOpacity, Alert } from "react-native";


import { useThemeStyles } from "../hooks/useThemeStyles";


export default function AlertaScreen() {
  const styles = createStyles(useThemeStyles());

  return (
    <View style={styles.container}>
      <AntDesign style={styles.Flecha} name="arrow-left" size={30} color="#244F7E" />
      <Text style={styles.Title}>SafeWaves</Text>
      <Text style={styles.SubTitle}>Alertas</Text>
      <View style={styles.line} />

      <View style={styles.row}>

        
        {/* Card 3 */}
        <View style={styles.red}>
          <Text style={styles.numVerm}>85</Text>
          <Text style={styles.subNomeCardVerm}>Alertas Ativos</Text>
        </View>

        {/* Card 4 */}
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
      
              <View style={styles.rowButtons}>
                <TouchableOpacity

  
                  style={styles.botaoVermelho}
                  onPress={() => Alert.alert("!")}
                >
                  <Text style={styles.textBotaoVerm}>Emergência</Text>
                </TouchableOpacity>
              </View>
            </View>


    </View>
    
  );
}

const createStyles = (theme) =>
  StyleSheet.create({
  container: {
    backgroundColor: "#021024",
    flex: 1,
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
    color: "#244F7E",
  },
  SubTitle: {
    marginTop: 0,
    marginLeft: 65,
    fontSize: 16,
    opacity:0.5,
    color: "#244F7E",
  },
  line: {
    marginTop: 10, // Espaço entre os textos e a linha
    marginHorizontal: 0, // Margem lateral para ajustar o comprimento da linha
    borderBottomWidth: 0.5, // Espessura da linha
    borderBottomColor: "#244F7E", // Cor da linha
  },

//----------------------------------------------------------------------

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
    marginHorizontal: 15, // Espaçamento entre os cards
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000", // Cor da sombra
    shadowOffset: { width: 0, height: 12 }, // Deslocamento da sombra
    shadowOpacity: 0.58, // Opacidade da sombra
    shadowRadius: 16, // Raio da sombra
    elevation: 10, // Elevação para Android
  },
    
  green: {
    backgroundColor: theme.verde,
    flex: 1,
    height: 129,
    borderRadius: 20,
    borderColor: theme.bordaverd,
    borderWidth: 1,
    marginHorizontal: 15, // Espaçamento entre os cards
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
    marginHorizontal: 15, // Espaçamento entre os cards
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
    marginTop: 0,
    height: 50,
  },

  numVerd: {
      color: theme.bordaverd,
      fontSize: 30,
      fontWeight: "bold",
      marginTop: 0,
      height: 50,
  },

  numAzul: {
        color: theme.bordaazul,
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 0,
        height: 50,
  },

//-----------------------------------------------------------------------

acoesRap: {
  backgroundColor: theme.buttonSecundario,
  borderRadius: 20,
  borderColor: theme.border,
  borderWidth: 1,
  width: 355,
  height: 110,
  marginHorizontal: 15,
  marginTop: 40,
  shadowRadius: { width: 0, height: 12 },
  shadowOpacity: 0.58,
  shadowRadius: 16,
  elevation: 10,
  shadowColor: theme.shadowColor,
},
textAcoes: {
  margin: 10,
  color: theme.text,
},
camera: {
  color: theme.icons,
},
alert: {
  color: theme.icons,
},
rowButtons: {
  flexDirection: "row",
  justifyContent: "space-between",
  paddingHorizontal: 10,
  marginTop: 5,
},

botaoVermelho: {
  flex: 1,
  backgroundColor: theme.vermelho,
  borderRadius: 20,
  borderRadius: 100,
  paddingVertical: 10,
  alignItems: "center",
  justifyContent: "center",
},
textBotaoVerm: {
  color: "#FFFFFF",
  fontSize: 12,
},
});

