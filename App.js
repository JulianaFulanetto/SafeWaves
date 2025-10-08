
//Importa o criador de abas (Bottom Tabs) do react Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//Importa o criador de pilhas (Stack Navigator)
import { createStackNavigator } from "@react-navigation/stack";

//Importa o container principal de navegação do react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { Text, StyleSheet } from "react-native";

//Importa o enableScreens do react-native-screens para melhorar performance
import { enableScreens } from "react-native-screens";
import HomeScreen from "./screens/HomeScreen";
import AlertaScreen from "./screens/AlertaScreen";
import ImagemScreen from "./screens/ImagemScreen";

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

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// ---------- STACK DA HOME ----------
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AlertaScreen" component={AlertaScreen} />
      <Stack.Screen name="ImagemScreen" component={ImagemScreen} />
    </Stack.Navigator>
  );
}

// ---------- APLICAÇÃO PRINCIPAL ----------
export default function App() {
  const theme = useTheme(); // Obtém o tema atual
  const styles = createStyles(theme); // Usa o tema para criar os estilos

  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          style={styles.tab}
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#244F7E",
            tabBarInactiveTintColor: "#253448",
            tabBarHideOnKeyboard: true,
            tabBarActiveBackgroundColor: "#021024",
            tabBarInactiveBackgroundColor: "#021024",
            animation: "shift",
            tabBarStyle: {
              backgroundColor: "#021024",
            },
            tabBarItemStyle: {
              borderTopWidth: 0,
              borderTopColor: "#244F7E",
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStack} // ← Aqui usamos o Stack
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
                <Feather name="activity" size={24} color="#244F7E" />
              ),
            }}
          />

          <Tab.Screen
            name="Relatorio"
            component={RelatorioScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Entypo name="bar-graph" size={24} color="#244F7E" />
              ),
            }}
          />

          <Tab.Screen
            name="Configuração"
            component={ConfiguracaoScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Octicons name="gear" size={24} color="#244F7E" />
              ),
            }}
          />

          <Tab.Screen
            name="Rotas"
            component={RotaScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Entypo name="map" size={24} color="#244F7E" />
              ),
            }}
          />

          <Tab.Screen
            name="Comunidade"
            component={ComunidadeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="people-outline" size={24} color="#244F7E" />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
// Função para criar estilos dinâmicos com base no tema
const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background, // Usa a cor de fundo do tema
    },
    tab: {
      backgroundColor: theme.card, // Usa a cor do card do tema
    },
  });