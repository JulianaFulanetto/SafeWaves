import { useColorScheme } from "react-native";
import { darkTheme } from "../themes/dark";
import { lightTheme } from "../themes/light";

export const useThemeStyles = () => {
  const scheme = useColorScheme();
  return scheme === "dark" ? darkTheme : lightTheme;
};
