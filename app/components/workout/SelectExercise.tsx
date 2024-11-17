// core
import { View, Text } from "react-native";
import { useState } from "react";

// comps
import { SelectDropDown } from "../layout";
import { AddNewExercise } from "./AddNewExercise";
import { Button, ButtonText } from "@/components/ui/button";

// deps
import { ExerciseService, SetService } from "@/services";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

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
  const queryClient = useQueryClient();

  const { data: exercises } = useQuery({
    queryKey: ["exercises"],
    queryFn: async () => {
      const exerciseService = new ExerciseService();
      return await exerciseService.getAll();
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (exerciseName: string) => {
      const exercise: Exercise | undefined = exercises?.find(
        (exercise) => exercise.name === exerciseName
      );

      if (!exercise) {
        throw new Error("Exercise not found");
      }

      const setService = new SetService();

      // NOTE: (alopez) Improve error handling. If a set matching the exercise already exists, don't create a new one.
      return await setService.create({
        workout: workout,
        exercise: exercise?.id,
        set_number: 1,
        weight: null,
        reps: null,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sets"] });
      console.log("successfully saved");
    },
    onError: (error) => {
      console.error("Error saving exercise:", error);
    },
  });

  const handleSave = (exerciseName: string) => {
    mutate(exerciseName);
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
