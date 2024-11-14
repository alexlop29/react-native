import { View, Text } from "react-native";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

// comps
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { SelectDropDown } from "../layout";

// services
import {
  ExerciseService,
  MuscleGroupService,
  EquipmentService,
} from "@/services";

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

  const { data: equipment } = useQuery({
    queryKey: ["equipment"],
    queryFn: () => {
      const equipment = new EquipmentService();
      return equipment.getAll();
    },
    refetchOnWindowFocus: false,
  });

  // should incorporate zod for validation
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState<string>("");
  const [selectedEquipment, setSelectedEquipment] = useState<string>("");
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

  // Add loading and error states
  return (
    <View>

      {muscleGroups && (
        <SelectDropDown
          values={muscleGroups?.map((muscleGroup) => muscleGroup.name)}
          handleSelect={setSelectedMuscleGroup}
        />
      )}

      {equipment && (
        <SelectDropDown
          values={equipment?.map((equipment) => equipment.name)}
          handleSelect={setSelectedEquipment}
        />
      )}

      <Input size="sm" isDisabled={false} isInvalid={false} isReadOnly={false}>
        <InputField
          placeholder="Enter Exercise Name"
          onChangeText={handleBlur}
        />
      </Input>

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
