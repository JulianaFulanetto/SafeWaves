//Importa o criador de abas (Bottom Tabs) do react Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Importa o container principal de navegação do react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { Text, StyleSheet } from "react-native";

//Importa o enableScreens do react-native-screens para melhorar performance
import { enableScreens } from "react-native-screens";
import HomeScreen from "./screens/HomeScreen";


import { GestureHandlerRootView } from "react-native-gesture-handler";

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
        <Tab.Navigator
          screenOptions={{
            headerShown: false, //Oculta o cabeçalho superior
            tabBarActiveTintColor: "#007AFF",
            tabBarInactiveTintColor: "#666",
            tabBarHideOnKeyboard: true,
            animation: 'shift',
          }}
        >
          <Tab.Screen
            name="Home" //Nome da rota
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Text style={{ fontSize: size * 0.8, color }}>🏠</Text>
              ),
            }}
          />
        </Tab.Navigator>

      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
