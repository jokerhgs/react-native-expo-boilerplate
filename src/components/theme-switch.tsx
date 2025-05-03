import { View, Switch, Text } from "react-native";
import { useColorScheme } from "nativewind";
import { useThemeContext } from "../context/theme-provider";
export const ThemeSwitch = () => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const { colors } = useThemeContext();
  return (
    <View className="flex-row items-center">
      <Text className="mr-2 text-foreground">{colorScheme?.toUpperCase()}</Text>
      <Switch
        value={colorScheme === "dark"}
        onValueChange={(val) => setColorScheme(val ? "dark" : "light")}
        trackColor={{ false: colors.foreground, true: colors.foreground }}
        thumbColor={colors.primary}
      />
    </View>
  );
};
