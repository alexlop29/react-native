// default
import { View } from "react-native";

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

// icons
import { ChevronDown } from "lucide-react-native";

// type
type InputProps = {
  values: string[];
  handleSelect: (value: string) => void;
};

const SelectDropDown = ({ values, handleSelect }: InputProps) => {
  return (
    <View>
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
            {values.map((value, index) => (
              <SelectItem
                key={index}
                label={value}
                value={value}
                onPress={() => handleSelect(value)}
              />
            ))}
          </SelectContent>
        </SelectPortal>
      </Select>
    </View>
  );
};

export { SelectDropDown };
