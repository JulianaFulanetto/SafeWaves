import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useThemeStyles } from "../hooks/useThemeStyles"; // Importa o hook personalizado
import { useState, useRef } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ConfiguracaoScreen() {
  const theme = useThemeStyles();
  const styles = createStyles(useThemeStyles());
  const [portaTravada, setPortaTravada] = useState(true);
  const [cortinaAberta, setCortinaAberta] = useState(false);
  const [luzLigada, setLuzLigada] = useState(false);

  // Referências de animação
  const portaAnim = useRef(new Animated.Value(0)).current;
  const cortinaAnim = useRef(new Animated.Value(0)).current;
  const luzAnim = useRef(new Animated.Value(0)).current;

  // Função para animar a porta
  const togglePorta = () => {
    Animated.timing(portaAnim, {
      toValue: portaTravada ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    setPortaTravada(!portaTravada);
  };

  // Função para animar a cortina
  const toggleCortina = () => {
    Animated.timing(cortinaAnim, {
      toValue: cortinaAberta ? 0 : 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    setCortinaAberta(!cortinaAberta);
  };

  // Função para animar a luz
  const toggleLuz = () => {
    Animated.timing(luzAnim, {
      toValue: luzLigada ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    setLuzLigada(!luzLigada);
  };

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
        <Text style={styles.SubTitle}>Configuração</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.control}>
        <Text style={styles.tituloControl}>Controle de Dispositivos</Text>

        {/* Card da Porta */}
        <View style={styles.card}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "black",
                  paddingHorizontal: 15,
                  marginTop: 10,
                }}
              >
                Porta Principal
              </Text>
              <Text
                style={{
                  color: portaTravada ? "green" : "red",
                  paddingHorizontal: 15,
                }}
              >
                {portaTravada ? "Travado" : "Destravado"}
              </Text>
            </View>
            <Animated.View
              style={{
                transform: [
                  {
                    rotateY: portaAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["50deg", "0deg"], // Porta gira 90 graus
                    }),
                  },
                ],
              }}
            >
              <Icon
                name="door"
                size={50}
                color={portaTravada ? "green" : "red"}
              />
            </Animated.View>
          </View>
          <TouchableOpacity style={styles.actionButton} onPress={togglePorta}>
            <Text style={styles.actionButtonText}>
              {portaTravada ? "Destravar" : "Travar"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Card da Cortina */}
        <View style={styles.card}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "black",
                  paddingHorizontal: 15,
                  marginTop: 10,
                }}
              >
                Cortina
              </Text>
              <Text
                style={{
                  color: cortinaAberta ? "green" : "red",
                  paddingHorizontal: 15,
                }}
              >
                {cortinaAberta ? "Aberta" : "Fechada"}
              </Text>
            </View>
            <Animated.View
              style={{
                transform: [
                  {
                    translateY: cortinaAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -50], // Cortina desliza para cima
                    }),
                  },
                ],
              }}
            >
              <Icon
                name="blinds"
                size={50}
                color={cortinaAberta ? "green" : "red"}
              />
            </Animated.View>
          </View>
          <TouchableOpacity style={styles.actionButton} onPress={toggleCortina}>
            <Text style={styles.actionButtonText}>
              {cortinaAberta ? "Fechar" : "Abrir"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Card da Luz */}
        <View style={styles.card}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "black",
                  paddingHorizontal: 15,
                  marginTop: 10,
                }}
              >
                Luz da Cozinha
              </Text>
              <Text
                style={{
                  color: luzLigada ? "green" : "red",
                  paddingHorizontal: 15,
                }}
              >
                {luzLigada ? "Ligada" : "Desligada"}
              </Text>
            </View>
            <Animated.View>
              <Icon
                name="lightbulb"
                size={50}
                color={luzLigada ? "orange" : "gray"}
              />
            </Animated.View>
          </View>
          <TouchableOpacity style={styles.actionButton} onPress={toggleLuz}>
            <Text style={styles.actionButtonText}>
              {luzLigada ? "Desligar" : "Ligar"}
            </Text>
          </TouchableOpacity>
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

    //-----------------------------------------

    control: {
      padding: 20,
    },
    tituloControl: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 20,
    },
    card: {
      backgroundColor: "#FFF",
      borderColor: "#CCC",
      borderWidth: 1,
      borderRadius: 10,
      padding: 15,
      marginBottom: 20,
    },
    actionButton: {
      backgroundColor: "#244F7E",
      paddingVertical: 10,
      borderRadius: 10,
      alignItems: "center",
      marginTop: 10,
    },
    actionButtonText: {
      color: "#FFF",
      fontWeight: "bold",
    },
  });
