import { useColorScheme } from "react-native";
import { darkTheme } from "../themes/dark"; // Importa o tema escuro
import { lightTheme } from "../themes/ligth"; // Importa o tema claro

export const useThemeStyles = () => {
  const scheme = useColorScheme(); // Detecta o tema do sistema
  return scheme === "dark" ? darkTheme : lightTheme; // Retorna o tema correspondente
};