import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { Grenze_400Regular_Italic, useFonts } from "@expo-google-fonts/grenze";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    regularItalic: Grenze_400Regular_Italic,
  });
  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerStyle: { backgroundColor: "red" } }}>
        <Stack.Screen name="index" options={{ title: "Entry point" }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
