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
import { Icon } from "@/components/ui/icon";

const SelectExercise = () => {
  // may be able to use prop to associate back to the parent workout!

  // can use react query to retrieve list of exercises from database in firebase cloud storage
  const [exercise, setExercise] = useState("");

  return (
    <View>
      {/* Need to add drop down */}
      {/* Will need option to add a new exercise */}
      <Select>
        <SelectTrigger variant="outline" size="md">
          <SelectInput placeholder="Select option" />
          <SelectIcon className="mr-3" as={ChevronDownIcon} />
          <Icon as={EditIcoChn} size="md" />
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
            <SelectItem label="UI Designing" value="ui" isDisabled={true} />
            <SelectItem label="Backend Development" value="backend" />
          </SelectContent>
        </SelectPortal>
      </Select>
    </View>
  );
};

// Should handle new set in a different component

export default SelectExercise;
