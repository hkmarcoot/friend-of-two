import { Ionicons } from "@expo/vector-icons";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Link, Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import * as SecureStore from "expo-secure-store";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

const secureStorage = {
  getItem: SecureStore.getItemAsync,
  setItem: SecureStore.setItemAsync,
  removeItem: SecureStore.deleteItemAsync,
};

export default function RootLayoutNav() {
  return (
    <ConvexAuthProvider client={convex} storage={secureStorage}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#EEA217",
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
        <Stack.Screen
          name="(chat)/[chatid]"
          options={{ headerTitle: "Test" }}
        />
        <Stack.Screen
          name="(modal)/create"
          options={{
            headerTitle: "Start a Chat",
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
