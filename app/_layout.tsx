import { Ionicons } from "@expo/vector-icons";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Link, Stack } from "expo-router";
import { TouchableOpacity, Platform } from "react-native";
import * as SecureStore from "expo-secure-store";
// import Config from "react-native-config";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

// const convex = new ConvexReactClient(Config.EXPO_PUBLIC_CONVEX_URL!, {
//   unsavedChangesWarning: false,
// });

const isWeb = Platform.OS === "web";

const secureStorage = {
  // getItem: SecureStore.getItemAsync,
  // setItem: SecureStore.setItemAsync,
  // removeItem: SecureStore.deleteItemAsync,
  setItem: async (key: string, value: string) => {
    if (isWeb) {
      localStorage.setItem(key, value);
    } else {
      await SecureStore.setItemAsync(key, value);
    }
  },
  getItem: async (key: string) => {
    if (isWeb) {
      return localStorage.getItem(key);
    } else {
      return await SecureStore.getItemAsync(key);
    }
  },
  removeItem: async (key: string) => {
    if (isWeb) {
      localStorage.removeItem(key);
    } else {
      await SecureStore.deleteItemAsync(key);
    }
  },
};

export default function RootLayoutNav() {
  return (
    <ConvexAuthProvider client={convex} storage={secureStorage}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#03e3fc",
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "My Chats",
            headerRight: () => (
              <Link href={"/(modal)/create"} asChild>
                <TouchableOpacity>
                  <Ionicons name="add" size={32} color="white" />
                </TouchableOpacity>
              </Link>
            ),
          }}
        />
        <Stack.Screen name="(chat)/[chatid]" options={{ headerTitle: "..." }} />
        <Stack.Screen
          name="(modal)/create"
          options={{
            headerTitle: "Create a Chat with Your AI Mutual Friend",
            presentation: "modal",
            headerLeft: () => (
              <Link href={"/"} asChild>
                <TouchableOpacity>
                  <Ionicons name="close-outline" size={32} color="white" />
                </TouchableOpacity>
              </Link>
            ),
          }}
        />
      </Stack>
    </ConvexAuthProvider>
  );
}
