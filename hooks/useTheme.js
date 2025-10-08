import { useColorScheme, StyleSheet } from "react-native";
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";

export const useTheme = () => {
  const scheme = useColorScheme();
  return scheme === "dark" ? darkTheme : lightTheme;
};

export const useThemeStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    text: {
      color: theme.text,
    },
  });
};
