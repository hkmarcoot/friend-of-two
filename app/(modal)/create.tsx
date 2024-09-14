import {
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "expo-router";

const Page = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [icon, setIcon] = useState("");
  const [aiName, setAiName] = useState("");
  const [aiDes, setAiDes] = useState("");
  const startGroup = useMutation(api.groups.create);
  const router = useRouter();

  // Create a new group with Convex mutation
  const onCreateGroup = async () => {
    await startGroup({
      name,
      description: desc,
      icon_url: icon,
      ai_name: aiName,
      ai_description: aiDes,
    });
    router.back();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <Text style={styles.label}>Owner's Name</Text>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={setName}
        placeholder="Owner's Name ..."
      />
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.textInput}
        value={desc}
        onChangeText={setDesc}
        placeholder="A place to chat with [owner]'s AI mutual friend"
      />
      <Text style={styles.label}>Icon URL</Text>
      <TextInput style={styles.textInput} value={icon} onChangeText={setIcon} />
      <Text style={styles.label}>AI Mutual Friend's Name</Text>
      <TextInput
        style={styles.textInput}
        value={aiName}
        onChangeText={setAiName}
        placeholder="AI Name ..."
      />
      <Text style={styles.label}>
        Owner's Details To Let AI Mutual Friend Know
      </Text>
      <TextInput
        editable
        multiline={true}
        numberOfLines={4}
        style={styles.textInputDes}
        value={aiDes}
        onChangeText={setAiDes}
        placeholder="What the owner likes / dislikes ..."
      />
      <TouchableOpacity style={styles.button} onPress={onCreateGroup}>
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F5EA",
    padding: 10,
  },
  label: {
    marginVertical: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    minHeight: 40,
    backgroundColor: "#fff",
  },
  textInputDes: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    minHeight: 200,
    maxHeight: 200,
    backgroundColor: "#fff",
    padding: 10,
  },
  button: {
    backgroundColor: "#02c3d9",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Page;
