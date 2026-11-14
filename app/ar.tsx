import { Pressable, StyleSheet, Text, View } from "react-native";
import { ViroARSceneNavigator } from "@reactvision/react-viro";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AutoPlaneScene from "@/components/ar-scenes/AutoPlaneScene";

export default function ARView() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  // Back is a normal 2D button over the camera, so it stays put while the phone moves
  return (
    <View style={styles.container}>
      <ViroARSceneNavigator
        initialScene={{ scene: AutoPlaneScene }}
        style={styles.container}
      />
      <Pressable
        style={[styles.backButton, { top: insets.top + 16 }]}
        onPress={() => router.back()}
      >
        <Text style={styles.backText}>Back</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: "absolute",
    left: 16,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  backText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
});
