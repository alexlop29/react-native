// default
import React from "react";
import { StyleSheet } from "react-native";

// comps
import { Box } from "../ui/box";
import { Text } from "../ui/text";
import { Icon } from "../ui/icon";

// icons
import { Dumbbell } from "lucide-react-native";

// styles
import { Colors } from "@/constants/Colors";
const styled = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    borderStyle: "solid",
    borderColor: Colors.gray.background,
    borderWidth: 1,
  },
  icon: {
    color: Colors.gray.background,
  },
  iconContainer: {
    borderRadius: 16,
    backgroundColor: Colors.orange.background,
    marginRight: 8,
    padding: 12,
  },
});

//types
type InputProps = {
  name: string;
  description: string | null;
};

const WorkoutSummary = ({ name, description }: InputProps) => {
  return (
    <Box style={styled.container}>
      <Box style={styled.innerContainer}>
        <Box style={styled.iconContainer}>
          <Icon as={Dumbbell} style={styled.icon} />
        </Box>
        <Box>
          <Text>{name}</Text>
        </Box>
        <Box>
          <Text>{description}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export { WorkoutSummary };
