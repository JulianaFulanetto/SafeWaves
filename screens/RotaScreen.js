import React, { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MapView, { Marker } from "react-native-maps";
import { Feather } from "@expo/vector-icons";
import { useThemeStyles } from "../hooks/useThemeStyles";

const routes = [
  {
 id: "1",
    name: "Zona Norte",
    distance: 5.0,
    risk: "alto",
    color: "#e74c3c",
    points: [
      { lat: -22.2835, lon: -48.5639 },
      { lat: -22.2850, lon: -48.5662 },
      { lat: -22.2867, lon: -48.5690 },
    ],
  },
  {
       id: "2",
    name: "Centro",
    distance: 3.0,
    risk: "medio",
    color: "#f1c40f",
    points: [
      { lat: -22.2968, lon: -48.5582 },
      { lat: -22.2946, lon: -48.5564 },
    ],
  },
];

export default function RotaScreen() {
  const styles = createStyles(useThemeStyles());
  const [selectedRoute, setSelectedRoute] = useState(routes[0]);

  const getRiskColor = (risk) => {
    if (risk === "baixo") return "#2ecc71";
    if (risk === "medio") return "#f1c40f";
    return "#e74c3c";
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
      <Text style={styles.SubTitle}>Início</Text>
      <View style={styles.line} />
          </View>


      {/* ------ LISTA DE ROTAS ------ */}
      <FlatList
        data={routes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={[
              styles.routeButton,
              item.id === selectedRoute.id && styles.activeRoute,
            ]}
            onPress={() => setSelectedRoute(item)}
          >
            <Text style={styles.routeName}>{item.name}</Text>
            <Feather name="map" size={22} color="#fff" />
          </Pressable>
        )}
      />

      {/* ------ TITULO DA ROTA ------ */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>{selectedRoute.name}</Text>

        {/* ------ MAPA EXATAMENTE NO LUGAR PEDIDO ------ */}
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: selectedRoute.points[0].lat,
            longitude: selectedRoute.points[0].lon,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          {selectedRoute.points.map((p, index) => (
            <Marker
              key={index}
              coordinate={{ latitude: p.lat, longitude: p.lon }}
              pinColor={selectedRoute.color}
            />
          ))}
        </MapView>

        {/* ------ CAIXA: NÍVEL DE RISCO ------ */}
        <View style={styles.riskBox}>
          <Text style={styles.riskLabel}>Nível de Risco</Text>
          <Text
            style={[
              styles.riskValue,
              { color: getRiskColor(selectedRoute.risk) },
            ]}
          >
            {selectedRoute.risk.toUpperCase()}
          </Text>
        </View>

        {/* ------ LISTA DE COORDENADAS ------ */}
        <Text style={styles.pointsTitle}>Pontos da rota:</Text>
        {selectedRoute.points.map((p, index) => (
          <Text key={index} style={styles.pointItem}>
            • Lat: {p.lat} | Lon: {p.lon}
          </Text>
        ))}
      </View>
    </View>
  );
}

/* ------------------ ESTILOS -------------------- */

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
  routeButton: {
    backgroundColor: theme.buttonPrincipal,
    padding: 15,
    marginVertical: 8,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
     marginHorizontal: 15,

  },

  activeRoute: {
    backgroundColor: theme.buttonSecundario,
    borderColor: theme.buttonPrincipal,
    borderWidth: 1,
  },

  routeName: {
    color: theme.title,
    fontSize: 16,
  },

  card: {
    marginTop: 20,
    marginBottom: 10,
    padding: 15,
    backgroundColor: theme.buttonSecundario,
    borderRadius: 15,
     marginHorizontal: 15,
  },

  subtitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: theme.subtitle,
    marginBottom: 15,
  },

  map: {
    width: "100%",
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
  },

  riskBox: {
    padding: 10,
    backgroundColor: theme.background,
    borderRadius: 10,
    marginBottom: 15,
  },

  riskLabel: {
    color: theme.buttonPrincipal,
    fontSize: 14,
  },

  riskValue: {
    fontSize: 22,
    fontWeight: "bold",
  },

  pointsTitle: {
    color: "#fff",
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
  },

  pointItem: {
    color: theme.subtitle,
    marginTop: 4,
  },
});


