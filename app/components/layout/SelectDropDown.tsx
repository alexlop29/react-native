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
  SelectVirtualizedList,
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
          <View style={{ height: 200, width: "100%" }}>
            <SelectVirtualizedList
              data={values}
              initialNumToRender={5}
              getItemCount={(data) => data.length}
              getItem={(data, index) => data[index]}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <SelectItem
                  key={index}
                  label={item as string}
                  value={item as string}
                  onPress={() => handleSelect(item as string)}
                />
              )}
            />
          </View>
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

export { SelectDropDown };
