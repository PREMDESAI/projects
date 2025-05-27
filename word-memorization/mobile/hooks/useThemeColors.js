import { useColorScheme } from 'react-native';
const Colors = {
  light: {
    background: "#EDF1FCFF",
    background2: "#ffffff",
    background3: "#ffffff",

    text: "#000",
  },
  dark: {
    background: "#1A1C29FF",
    background2: "#212332FF",
    background3: "#1C234AE0",
    text: "#fff",
  },
}
const useThemeColors = () => {
  const colorScheme = useColorScheme()
  const colors = Colors[colorScheme]
  return colors
}
export default useThemeColors