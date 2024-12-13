import { View, Text } from "react-native";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

// comps
import { Input, InputField } from "@/components/ui/input";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { SelectDropDown } from "../reusables";

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
  };

  const handleSave = async () => {
    try {
      let exerciseService = new ExerciseService();
      return exerciseService.create(exercise);
    } catch (error) {
    }
  };

  // Add loading and error states
  return (
    <View>
      <Box className="gap-y-2">
        {muscleGroups && (
          <Box className="flex flex-row items-center justify-between">
            <Text>Muscle Group</Text>
            <SelectDropDown
              values={muscleGroups?.map((muscleGroup) => muscleGroup.name)}
              handleSelect={setSelectedMuscleGroup}
            />
          </Box>
        )}
        {equipment && (
          <Box className="flex flex-row items-center justify-between">
            <Text>Equipment</Text>
            <SelectDropDown
              values={equipment?.map((equipment) => equipment.name)}
              handleSelect={setSelectedEquipment}
            />
          </Box>
        )}

        <Box className="gap-y-2">
          <Text>Exercise Name</Text>
          <Input
            size="sm"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <InputField
              placeholder="Enter Exercise Name"
              onChangeText={handleBlur}
            />
          </Input>
        </Box>

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
      </Box>
    </View>
  );
};

export { AddNewExercise };
