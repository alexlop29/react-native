// core
import { View, Text } from "react-native";
import { useState, useEffect } from "react";

// comps
import { SelectDropDown } from "../layout";
import { AddNewExercise } from "./AddNewExercise";
import { Button, ButtonText } from "@/components/ui/button";

// deps
import firestore from "@react-native-firebase/firestore";
import { ExerciseService } from "@/services";
import { useQuery } from "@tanstack/react-query";

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
  const [screenView, setScreenView] = useState<ScreenView>("select");

  // NOTE: (will need to bust cache when adding new exercises)
  const { data: exercises } = useQuery({
    queryKey: ["exercises"],
    queryFn: async () => {
      const exerciseService = new ExerciseService();
      return await exerciseService.getAll();
    },
  });

  // create Set service and repository
  const handleSave = async (exerciseName: string) => {
    let exercise: Exercise | undefined = exercises?.find(
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
      // queryClient.invalidateQueries({ queryKey: ["sets"] });
      // the above does not work. need to convert useMutation();
      // Should navigate user back to the previous screen
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      {screenView === "select" && exercises && (
        <SelectDropDown
          values={exercises.map((exercise) => exercise.name)}
          handleSelect={handleSave}
        />
      )}

      {screenView === "add" && <AddNewExercise />}

      <Button
        onPress={() =>
          screenView === "select"
            ? setScreenView("add")
            : setScreenView("select")
        }
      >
        <ButtonText>
          <Text>
            {screenView === "select"
              ? "Add new exercise"
              : "Select an existing exercise"}
          </Text>
        </ButtonText>
      </Button>
    </View>
  );
};
