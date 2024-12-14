import { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { router } from "expo-router";

// comps
import { Button, ButtonText } from "@/components/ui/button";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { HStack } from "@/components/ui/hstack";
import { ExerciseCardCarousel } from "@/components/workout/ExerciseCardCarousel";
import { Heading } from "@/components/ui/heading";

// deps
import { WorkoutService } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { store } from "@/providers";
import { useStore } from "@tanstack/react-store";

// icons
import Ionicons from "@expo/vector-icons/Ionicons";
import { useMutation } from "@tanstack/react-query";

type Workout = {
  name: string;
  timeStarted: string;
  timeEnded: string | null;
  user: string | null;
};

interface WorkoutWithId extends Workout {
  id: string;
}

export default function TabTwoScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const { authUser } = useStore(store);

  const { data } = useQuery({
    queryKey: ["workoutHistory"],
    queryFn: async () => {
      const workoutService = new WorkoutService();
      if (authUser?.sub)
        return await workoutService.findByUserId(authUser?.sub);
    },
    enabled: !!authUser,
  });

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
    onError: (error) => {},
  });

  const handleViewAll = () => {
    router.push(`/viewall`);
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
      <HStack reversed={false} className="justify-between content-center">
        <Heading>Recent Workouts</Heading>
        <Button
          size="md"
          variant="solid"
          action="primary"
          onPress={() => handleViewAll()}
        >
          <ButtonText>
            <Text>View All</Text>
          </ButtonText>
        </Button>
      </HStack>
      {/* {data && (
        <ExerciseCardCarousel
          data={data.map((item: WorkoutWithId) => {
            return {
              name: item.name,
              date: item.timeEnded ?? "",
              id: item.id,
            };
          })}
        />
      )} */}
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
