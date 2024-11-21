import { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { router } from "expo-router";

// comps
import { Button, ButtonText } from "@/components/ui/button";
import ParallaxScrollView from "@/components/ParallaxScrollView";

// deps
import firestore from "@react-native-firebase/firestore";
import { WorkoutService } from "@/services";

// icons
import Ionicons from "@expo/vector-icons/Ionicons";
import { useMutation } from "@tanstack/react-query";

type Workout = {
  name: string;
  timeStarted: string;
  timeEnded: string | null;
  user: string;
};

export default function TabTwoScreen() {
  const [isLoading, setIsLoading] = useState(false);

  // get user details - make available globally ??
  // tanstack has built in cache. Will need get user details from auth

  const { mutate: handleStart } = useMutation({
    mutationFn: async (data: Workout) => {
      setIsLoading(true);
      const workoutService = new WorkoutService();
      let doc = await workoutService.create({
        name: "",
        timeStarted: new Date().toJSON(),
        timeEnded: null,
        user: null, // need to pass user details
      });
      router.push(`/workout/${doc.id}`);
      setIsLoading(false);
    },
    onError: (error) => {
      console.log("Error creating workout", error);
    },
  });

  /*
    const { mutate } = useMutation({
    mutationFn: async () => {
      const workoutService = new WorkoutService();
      await workoutService.update(id, { timeEnded: new Date().toJSON() });
      router.back();
    },
    onError: (error) => {
      console.log("Error finishing workout", error);
    },
  });
  */

  // const handleStart = async () => {
  //   setIsLoading(true);
  //   try {
  //     let doc = await firestore().collection("Workouts").add({
  //       name: "",
  //       timeStarted: new Date().toJSON(),
  //       timeEnded: null,
  //       user: null,
  //     });
  //     router.push(`/workout/${doc.id}`);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
