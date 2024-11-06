// core
import { View } from "react-native";
import { useState, useEffect } from "react";

// comps
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
} from "@/components/ui/select";

// deps
import { useQuery } from '@tanstack/react-query';
import firestore from "@react-native-firebase/firestore";
// icons
import { ChevronDown } from 'lucide-react-native';

// types
type Exercise = {
  id: string;    // Add id field to capture the document ID
  name: string;
};

type InputProps = {
  workout: string;
}

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
          const exerciseList: Exercise[] = querySnapshot.docs.map((documentSnapshot) => ({
            id: documentSnapshot.id,           // Capture the document ID
            ...documentSnapshot.data(),         // Spread the remaining data (like name)
          } as Exercise));

          setExercises(exerciseList);
        },
        (error) => {
          console.error("Error fetching exercises: ", error);
        }
      );

    return () => unsubscribe();
  }, []);

  const handleSave = async (exercise: Exercise) => {
    console.log("Saving set...");
    try {
      await firestore().collection("Sets").add({
        workout: workout,
        exercise: exercise.id, // Save the exercise ID
        set_number: 1,
        weight: null,
        reps: null,
      });
{/* /*
Plan the schema for the set collection
{
    workout: string;
    exercise: string;
    set_number: number;
    weight: number;
    reps: number;
}
 */}
      console.log(exercise);
      console.log("Set added successfully!");
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
      <Select>
        <SelectTrigger variant="outline" size="md">
          <SelectInput placeholder="Select option" />
          <SelectIcon className="mr-3" as={ChevronDown} />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            {exercises.map((exercise, index) => (
              <SelectItem
                key={index}                       // Use the id as the key
                label={exercise.name}
                value={exercise.name}
                onPress={() => handleSave(exercise)}    // Pass full exercise (with id)
              />
            ))}
          </SelectContent>
        </SelectPortal>
      </Select>
    </View>
  );
};

// Should handle new set in a different component
