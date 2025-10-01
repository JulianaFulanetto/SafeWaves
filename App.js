//Importa o criador de abas (Bottom Tabs) do react Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Importa o container principal de navegação do react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { Text, StyleSheet } from "react-native";

//Importa o enableScreens do react-native-screens para melhorar performance
import { enableScreens } from "react-native-screens";
import HomeScreen from "./screens/HomeScreen";

import { useTheme } from "./hooks/useTheme";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import MonitoramentoScreen from "./screens/MonitoramentoScreen";
import RelatorioScreen from "./screens/RelatorioScreen";
import ConfiguracaoScreen from "./screens/ConfiguracaoScreen";
import RotaScreen from "./screens/RotaScreen";
import ComunidadeScreen from "./screens/ComunidadeScreen";

//icons
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import Octicons from '@expo/vector-icons/Octicons';


//Ativa otimizações de telas nativas
enableScreens();

//cria o componente de navegação abas (Tab Naviator)
const Tab = createBottomTabNavigator();

export default function App() {
  const styles = createStyles(useTheme());

  return (
    // É o provedor que gerencia o estado da navegação
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator style={styles.tab}
          screenOptions={{
            headerShown: false, //Oculta o cabeçalho superior
            tabBarActiveTintColor: "#244F7E",
            tabBarInactiveTintColor: "#253448",
            tabBarHideOnKeyboard: true,
            tabBarActiveBackgroundColor: "#021024",
            tabBarInactiveBackgroundColor: "#021024",
            animation: "shift",
            tabBarStyle:{
              backgroundColor:"#021024"
            },
            tabBarItemStyle:{
              borderTopWidth: 0,
              borderTopColor: "#244F7E"
            }
          }}
        >
          <Tab.Screen
            name="Home" //Nome da rota
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Text style={{ fontSize: size * 0.8, color }}>
                  <Ionicons name="home-outline" size={24} color="#244F7E" />
                </Text>
              ),
            }}
          />

          <Tab.Screen
            name="Monitoramento"
            component={MonitoramentoScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Text style={{ fontSize: size * 0.8, color }}>
                  <Feather name="activity" size={24} color="#244F7E" />
                </Text>
              ),
            }}
          />

          <Tab.Screen
            name="Relatorio"
            component={RelatorioScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Text style={{ fontSize: size * 0.8, color }}>
                  <Entypo name="bar-graph" size={24} color="#244F7E" />
                </Text>
              ),
            }}
          />

          <Tab.Screen
            name="Configuração"
            component={ConfiguracaoScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Text style={{ fontSize: size * 0.8, color }}>
                  <Octicons name="gear" size={24} color="#244F7E" />
                </Text>
              ),
            }}
          />

          <Tab.Screen
            name="Rotas"
            component={RotaScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Text style={{ fontSize: size * 0.8, color }}>
                  <Entypo name="map" size={24} color="#244F7E" />
                </Text>
              ),
            }}
          />

          <Tab.Screen
            name="Comunidade"
            component={ComunidadeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Text style={{ fontSize: size * 0.8, color }}>
                  <Ionicons name="people-outline" size={24} color="#244F7E" />
                </Text>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
  });
