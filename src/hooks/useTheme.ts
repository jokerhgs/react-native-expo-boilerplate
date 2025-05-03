import { useColorScheme } from "nativewind";
import { Theme, ThemeColors } from "../types/theme";

const lightColors: ThemeColors = {
  background: "#ffffff",
  foreground: "#000000",
  primary: "#b68315",
  headerBg: "#f8f8f8",
  tabBarBg: "#ffffff",
  tabBarActiveTint: "#b68315",
  tabBarInactiveTint: "#64748b",
};

const darkColors: ThemeColors = {
  background: "#000000",
  foreground: "#ffffff",
  primary: "#0077ff",
  headerBg: "#121212",
  tabBarBg: "#1a1a1a",
  tabBarActiveTint: "#0077ff",
  tabBarInactiveTint: "#94a3b8",
};

export const useTheme = (): Theme => {
  const { colorScheme } = useColorScheme() as { colorScheme: "light" | "dark" };

  return {
    colors: colorScheme === "dark" ? darkColors : lightColors,
    isDark: colorScheme === "dark",
    colorScheme,
  };
};
