// default
import React from "react";
import { StyleSheet } from "react-native";
import { router } from "expo-router";

// comps
import { Box } from "../ui/box";
import { RoundedButton } from "../reusables/RoundedButton";

// icons
import { ChevronLeft } from "lucide-react-native";
import { Plus } from "lucide-react-native";

// styles
import { Colors } from "@/constants/Colors";
const styled = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
});

const WorkoutHeader = () => {

  const handleReturn = () => {
    router.back();
  }

  return (
    <Box style={styled.container}>
      <Box>
        <RoundedButton
          icon={ChevronLeft}
          backgroundColor={Colors.black.background}
          color="white"
          handleEvent={handleReturn}
        />
      </Box>
      <Box>
        <RoundedButton
          icon={Plus}
          backgroundColor={Colors.blue.background}
          color={"black"}
        />
      </Box>
    </Box>
  );
};

export { WorkoutHeader };
