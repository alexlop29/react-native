import { View, Text } from "react-native";
import { useState } from "react";

// comps
import { Input, InputField } from "@/components/ui/input";
import {
  Button,
  ButtonText,
} from "@/components/ui/button";

// deps
import firestore from "@react-native-firebase/firestore";

// services
import { ExerciseService } from "@/services";

// types
type Exercise = {
  name: string;
};

// Can reduce comps by removing useState and just sending onChangeText to handleSave
const AddNewExercise = () => {
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

  // muslce groups, equipment required

  return (
    <View>
      {/* Add a dropdown for muscle groups and a text input for exercise name in the future */}
      <Input
        // variant="rounded"
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
      {/* Add a loading indicator after the save button is pressed */}
      {/* <Pressable onPress={() => handleSave()}> */}
        <Button size="md" variant="solid" action="primary" onPress={() => handleSave()}>
          <ButtonText>
            <Text>Save</Text>
          </ButtonText>
        </Button>
      {/* </Pressable> */}
      {/* After saving the new exercise, navigate back to the select exercise component */}
    </View>
  );
};

export { AddNewExercise };
