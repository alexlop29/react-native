// default
import React from "react";
import { StyleSheet } from "react-native";

// comps
import { Box } from "lucide-react-native";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

// icons
import { ChevronLeft } from "lucide-react-native";
import { Plus } from "lucide-react-native";

// styles
import { Colors } from "@/constants/Colors";
const styled = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 32,
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconButton: {
    padding: 16,
    backgroundColor: Colors.black.background,
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  back: {
    color: Colors.white.background,
  },
  plusContainer: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: Colors.blue.background,
    justifyContent: "center",
    alignItems: "center",
  },
  plus: {
    color: Colors.black.background,
  },
});

const WorkoutHeader = () => {
  return (
    <Box style={styled.container}>
      <Button style={styled.iconButton}>
        <Icon as={ChevronLeft} style={styled.back} />
      </Button>
      <Button style={styled.plusContainer}>
        <Icon as={Plus} style={styled.plus} />
      </Button>
    </Box>
  );
};

export { WorkoutHeader };
