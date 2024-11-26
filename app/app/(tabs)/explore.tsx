import { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { router } from "expo-router";

// comps
import { Button, ButtonText } from "@/components/ui/button";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { HStack } from "@/components/ui/hstack";

// deps
import { WorkoutService } from "@/services";

// icons
import Ionicons from "@expo/vector-icons/Ionicons";
import { useMutation } from "@tanstack/react-query";
import { ExerciseCardCarousel } from "@/components/workout/ExerciseCardCarousel";
import { Heading } from "@/components/ui/heading";

type Workout = {
  name: string;
  timeStarted: string;
  timeEnded: string | null;
  user: string | null;
};

export default function TabTwoScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const { mutate: handleStart } = useMutation({
    mutationFn: async () => {
      setIsLoading(true);
      const workoutService = new WorkoutService();
      let doc = await workoutService.create({
        name: "",
        timeStarted: new Date().toJSON(),
        timeEnded: null,
        user: null,
      });
      router.push(`/workout/${doc.id}`);
      setIsLoading(false);
    },
    onError: (error) => {
      console.log("Error creating workout", error);
    },
  });

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

  let fakeData = [
    {
      name: "Chest and Triceps",
      date: "November 23, 2024",
    },
    {
      name: "Back and Biceps",
      date: "November 20, 2024",
    },
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <HStack reversed={false} className="justify-between content-center">
        <Heading>Recent Workouts</Heading>
        <Button size="md" variant="solid" action="primary">
          <ButtonText>
            <Text>View All</Text>
          </ButtonText>
        </Button>
      </HStack>
      <ExerciseCardCarousel data={fakeData} />
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
