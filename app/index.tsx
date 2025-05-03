import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { ThemeSwitch } from "@/src/components/theme-switch";

export default function IndexScreen() {
  const router = useRouter();

  const handleContinue = () => {
    router.replace("/(tabs)/home");
  };

  return (
    <View className="flex-1 bg-background py-20 px-10">
      {/* Header with theme toggle */}
      <View className="flex-row justify-between items-center mb-10">
        <Text className="text-2xl font-bold text-primary">Welcome</Text>
        <ThemeSwitch />
      </View>

      {/* Main content */}
      <View className="mb-8">
        <Text className="text-3xl font-bold text-primary mb-2">React Native-Expo Boilerplate</Text>

        {/* Visual color demo */}
        <View className="h-20 w-full bg-primary rounded-lg mb-4 flex items-center justify-center">
          <Text className="text-background font-bold">Primary Color</Text>
        </View>
      </View>

      {/* Instructions */}
      <View className="space-y-4 mb-12">
        <View className="flex-row items-start">
          <Text className="text-primary font-bold mr-2">1.</Text>
          <Text className="text-foreground flex-1">
            Configure tailwind.config.js and globals.css
          </Text>
        </View>
        <View className="flex-row items-start">
          <Text className="text-primary font-bold mr-2">2.</Text>
          <Text className="text-foreground flex-1">Toggle the switch to see color changes</Text>
        </View>
      </View>

      {/* Continue button */}
      <TouchableOpacity
        onPress={handleContinue}
        className="bg-primary rounded-lg p-4 px-8 items-center mx-auto mt-auto mb-10">
        <Text className="text-background font-bold text-lg">Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
