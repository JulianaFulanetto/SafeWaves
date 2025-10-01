import { useColorScheme } from 'react-native';

export const useThemeStyles = () => {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark'
    ? require('../hooks/dark').default
    : require('../hooks/light').default;
};