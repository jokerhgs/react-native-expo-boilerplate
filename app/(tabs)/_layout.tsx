import { Tabs } from "expo-router";
import React from "react";
import { useThemeContext } from "@/src/context/theme-provider";
export default function TabLayout() {
  const { colors } = useThemeContext();
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.background },
        headerTitleStyle: {
          color: colors.foreground,
        },
        tabBarStyle: {
          backgroundColor: colors.background,
          borderColor: colors.background,
        },
      }}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  );
}
