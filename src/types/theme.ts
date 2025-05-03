export type ColorScheme = "light" | "dark";

export interface ThemeColors {
  background: string;
  foreground: string;
  primary: string;
  headerBg: string;
  tabBarBg: string;
  tabBarActiveTint: string;
  tabBarInactiveTint: string;
}

export interface Theme {
  colors: ThemeColors;
  isDark: boolean;
  colorScheme: ColorScheme;
}
