import { useState } from "react";
import { View, Text } from "react-native";

// comps
import { Button, ButtonText } from "@/components/ui/button";

export default function TabTwoScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const handleStart = () => {
    setIsLoading(true);
    // Create workout document in Firestore
    // Navigate to workout/[id] screen
  };

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
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
    </View>
  );
}
