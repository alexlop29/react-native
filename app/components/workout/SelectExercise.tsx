// core
import { View, Text } from "react-native";
import { useState, useEffect } from "react";

// comps
import { SelectDropDown } from "../layout";
import { AddNewExercise } from "./AddNewExercise";
import {
  Button,
  ButtonText,
} from "@/components/ui/button";

// deps
import firestore from "@react-native-firebase/firestore";

// types
type Exercise = {
  id: string;
  name: string;
};

type InputProps = {
  workout: string;
};

type ScreenView = "select" | "add";

export const SelectExercise = ({ workout }: InputProps) => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [selected, setSelected] = useState<Exercise | null>(null);
  const [screenView, setScreenView] = useState<ScreenView>("select");

  useEffect(() => {
    const unsubscribe = firestore()
      .collection("Exercises")
      .onSnapshot(
        (querySnapshot) => {
          const exerciseList: Exercise[] = querySnapshot.docs.map(
            (documentSnapshot) =>
              ({
                id: documentSnapshot.id, // Capture the document ID
                ...documentSnapshot.data(), // Spread the remaining data (like name)
              } as Exercise)
          );

          setExercises(exerciseList);
        },
        (error) => {
          console.error("Error fetching exercises: ", error);
        }
      );

    return () => unsubscribe();
  }, []);

  // create Set service and repository
  const handleSave = async (exerciseName: string) => {
    let exercise: Exercise | undefined = exercises.find(
      (exercise) => exercise.name === exerciseName
    );

    try {
      await firestore().collection("Sets").add({
        workout: workout,
        exercise: exercise?.id, // Save the exercise ID
        set_number: 1,
        weight: null,
        reps: null,
      });
      // Should navigate user back to the previous screen
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      {screenView === "select" &&
        <SelectDropDown
          values={exercises.map((exercise) => exercise.name)}
          handleSelect={handleSave}
        />
      }

      {screenView === "add" && 
        <AddNewExercise />
      }

      <Button onPress={() => screenView === "select" ? setScreenView("add") : setScreenView("select")}>
        <ButtonText>
          <Text>{screenView === "select" ? "Add new exercise" : "Select an existing exercise"}</Text>
        </ButtonText>
      </Button>
    </View>
  );
};
