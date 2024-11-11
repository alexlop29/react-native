// core
import { View } from "react-native";
import { useState, useEffect } from "react";

// comps
import { SelectDropDown } from "../layout";
import { AddNewExercise } from "./AddNewExercise";

// deps
import firestore from "@react-native-firebase/firestore";

// types
type Exercise = {
  id: string; // Add id field to capture the document ID
  name: string;
};

type InputProps = {
  workout: string;
};

// can make select a headless comp and allow re-use
// would like to be able to reuse for more than the first set

// May want to split into two components
// Add new and select
export const SelectExercise = ({ workout }: InputProps) => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [selected, setSelected] = useState<Exercise | null>(null);

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
      {/* Need to add drop down */}
      {/* Will need option to add a new exercise */}
      {/* May also want a search icon to quickly cycle through the search options */}

      {/* <SelectDropDown
        values={exercises.map((exercise) => exercise.name)}
        handleSelect={handleSave}
      /> */}
      <AddNewExercise />
      {/* test above */}
    </View>
  );
};

// Should handle new set in a different component
