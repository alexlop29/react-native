import { View, Text } from "react-native";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

// comps
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { SelectDropDown } from "../layout";

// services
import { ExerciseService, MuscleGroupService } from "@/services";

// types
type Exercise = {
  name: string;
};

const AddNewExercise = () => {
  const { data: muscleGroups } = useQuery({
    queryKey: ["muscleGroups"],
    queryFn: () => {
      const muscleGroups = new MuscleGroupService();
      return muscleGroups.getAll();
    },
    refetchOnWindowFocus: false,
  });

  // should incorporate zod for validation
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState<string>("");
  const [exercise, setExercise] = useState<Exercise>({
    name: "",
  });

  const handleBlur = (text: string) => {
    setExercise({ name: text });
    console.log(exercise);
  };

  const handleSave = async () => {
    try {
      let exerciseService = new ExerciseService();
      return exerciseService.create(exercise);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      {/* should show a loading indicator while the data is being fetched */}

      {/* works ... need to create scrollable select dropdown */}
      {muscleGroups && (
        <SelectDropDown
          values={muscleGroups?.map((muscleGroup) => muscleGroup.name)}
          handleSelect={setSelectedMuscleGroup}
        />
      )}

      <Input size="sm" isDisabled={false} isInvalid={false} isReadOnly={false}>
        <InputField
          placeholder="Enter Exercise Name"
          onChangeText={handleBlur}
        />
      </Input>
      {/* Add a loading indicator after the save button is pressed */}
      <Button
        size="md"
        variant="solid"
        action="primary"
        onPress={() => handleSave()}
      >
        <ButtonText>
          <Text>Save</Text>
        </ButtonText>
      </Button>
    </View>
  );
};

export { AddNewExercise };
