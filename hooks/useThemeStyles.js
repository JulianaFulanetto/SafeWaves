import { useColorScheme, StyleSheet } from "react-native";
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";

export const useThemeStyles = () => {
  const scheme = useColorScheme(); // Detecta o tema do sistema
  return scheme === "dark" ? darkTheme : lightTheme; // Retorna o tema correspondente
};