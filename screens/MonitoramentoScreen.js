import { View, Text, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";




export default function MonitoramentoScreen() {

  
  return (
    <View style={styles.container}>
      <AntDesign style={styles.Flecha} name="arrow-left" size={30} color="#244F7E" />
      <Text style={styles.Title}>SafeWaves</Text>
      <Text style={styles.SubTitle}>Monitoramento</Text>
      <View style={styles.line}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"",
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
  line:{
    marginTop:10,
    marginHorizontal:0,
    borderBottomColor:"#244F7E",
    borderBottomWidth:0.5,
  }
});