import { useState } from "react";
import { View, TextInput } from "react-native";

import firestore from "@react-native-firebase/firestore";

type Exercise = {
  name: string;
};

const ExerciseInput = () => {
  const [exercise, setExercise] = useState<Exercise>({ name: "" });

  const handleInput = async (exercise: string) => {
    try {
      await firestore().collection("Exercises").add({
        name: exercise,
      });
      setExercise({name: exercise});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput onBlur={() => handleInput} value={exercise.name ?? ""} />
    </View>
  );
};

export { ExerciseInput };
