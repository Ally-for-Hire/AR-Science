import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Menu() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AR Science</Text>
      <Text style={styles.subtitle}>Explore science in 3D</Text>

      <Pressable style={styles.button} onPress={() => router.push("/ar")}>
        <Text style={styles.buttonText}>Start AR</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#111827",
    padding: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: 16,
    color: "#9ca3af",
    marginTop: 8,
    marginBottom: 48,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
  },
});
