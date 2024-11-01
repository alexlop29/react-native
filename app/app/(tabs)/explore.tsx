import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

// comps
import { Button, ButtonText } from "@/components/ui/button";
import ParallaxScrollView from "@/components/ParallaxScrollView";

// icons
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabTwoScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const handleStart = () => {
    setIsLoading(true);
    // Create workout document in Firestore
    // Navigate to workout/[id] screen
  };

  if (isLoading) {
    return (
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
        headerImage={
          <Ionicons size={310} name="code-slash" style={styles.headerImage} />
        }
      >
        <Text>Loading...</Text>
      </ParallaxScrollView>
    );
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <Button
        size="md"
        variant="solid"
        action="primary"
        onPress={() => handleStart()}
      >
        <ButtonText>
          <Text>Start New Workout</Text>
        </ButtonText>
      </Button>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
