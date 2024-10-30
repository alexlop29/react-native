// core
import { View } from "react-native";
import { useState } from "react";

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
import firestore from "@react-native-firebase/firestore";
/*
  better to use tanstack to avoid the useEffect on the subscription;
*/

// icons
import { ChevronDown } from 'lucide-react-native';

//types

// could move to a separate file
type Exercise = {
  name: string;
};


// can make select a headless comp and allow re-use

// May want to split into two components
// Add new and select
export const SelectExercise = () => {
  // may be able to use prop to associate back to the parent workout!

  // can use react query to retrieve list of exercises from database in firebase cloud storage
  const [exercise, setExercise] = useState<Exercise[]>([]);

  const handleGetExercises = async () => {
    // may want some sort of pagination here
    // maybe retrieve x amount, and allow the user to search for more (trie?);
    const exercises = await firestore().collection("exercises").get();
    return exercises.docs.map((documentSnapshot) =>
      documentSnapshot.data() as Exercise
    );
  };

  return (
    <View>
      {/* Need to add drop down */}
      {/* Will need option to add a new exercise */}
      {/* May also want a search icon to quickly cycle through the search options */}
      {/* ??? */}
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
            <SelectItem label="UX Research" value="ux" />
            <SelectItem label="Web Development" value="web" />
            <SelectItem
              label="Cross Platform Development Process"
              value="Cross Platform Development Process"
            />
            <SelectItem label="Backend Development" value="backend" />
          </SelectContent>
        </SelectPortal>
      </Select>
    </View>
  );
};

// Should handle new set in a different component
