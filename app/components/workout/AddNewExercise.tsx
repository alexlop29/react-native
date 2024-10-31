import { View, Text } from "react-native";
import { useState } from "react";

// comps
import { Input, InputField } from "@/components/ui/input";
import {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonGroup,
} from "@/components/ui/button";
import { Pressable } from "@/components/ui/pressable";

// deps
import firestore from "@react-native-firebase/firestore";

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
    // Transition component to loading state if desired
    // Add validation to ensure exercise name is unique
    try {
      await firestore().collection("Exercises").add({
        name: exercise.name,
      });
      console.log("Exercise added successfully!");
      // Should navigate user back to the previous screen
    } catch (error) {
      console.log(error);
    }
  };

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
      <Pressable onPress={handleSave}>
        <ButtonGroup>
          <Button size="md" variant="solid" action="primary">
            <ButtonText>
              <Text>Save</Text>
            </ButtonText>
            <ButtonIcon />
          </Button>
        </ButtonGroup>
      </Pressable>
      {/* After saving the new exercise, navigate back to the select exercise component */}
    </View>
  );
};

export { AddNewExercise };
