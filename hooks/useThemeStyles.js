import { useColorScheme } from "react-native";
import { darkTheme } from "../themes/dark";
import { lightTheme } from "../themes/ligth";

export const useThemeStyles = () => {
  const scheme = useColorScheme(); // Detecta o tema do sistema
  return scheme === "dark" ? darkTheme : lightTheme; // Retorna o tema correspondente
};