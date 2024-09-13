import { useAuthActions } from "@convex-dev/auth/react";
import { Button } from "react-native";

export function SignOut() {
  const { signOut } = useAuthActions();
  return (
    <Button onPress={() => signOut()} title="Sign out with GitHub"></Button>
  );
}
