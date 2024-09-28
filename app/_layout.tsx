import { Colors } from "@/constants/Colors";
import { useRouter, Stack } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import {
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";


export default function App() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/login"); // Ensures navigation starts at the login screen
  }, []);

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: Colors.white }} >
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RootNavigation />
    </GestureHandlerRootView>
  </SafeAreaProvider>
  );
}

function RootNavigation() {
  const router = useRouter();

  return (
    <Stack initialRouteName="login" screenOptions={{ headerShown: false }} >

      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ 
        title: 'Login', 
        headerTransparent: true,
        headerShown: false,
        headerTitle: "",
        }} />
      <Stack.Screen name="signup" options={{ title: 'Signup' }} />
      <Stack.Screen name="listing/[id]"
        options={{
          title: 'Listing',
          headerTransparent: true,
          headerShown: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: 10,
                padding: 4,
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.white,
                  padding: 6,
                  borderRadius: 10,
                }}
              >
                <Feather name="arrow-left" size={20} />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => { }}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: 10,
                padding: 4,
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.white,
                  padding: 6,
                  borderRadius: 10,
                }}
              >
                <Ionicons name="bookmark-outline" size={20} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
