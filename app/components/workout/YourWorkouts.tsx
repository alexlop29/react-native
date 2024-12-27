// default
import { StyleSheet } from "react-native";
import { router } from "expo-router";

// comps
import { Box } from "../ui/box";
import { Text } from "../ui/text";
import { Icon } from "../ui/icon";
import { Button } from "../ui/button";
import { WorkoutSummary } from "./WorkoutSummary";

// icons
import { ArrowRightIcon } from "lucide-react-native";

// styles
import { Colors } from "@/constants/Colors";
const styled = StyleSheet.create({
  workoutHistoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 32,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  icon: {
    color: Colors.gray.background,
  },
});

const YourWorkouts = () => {
  const sampleWorkouts = [
    {
      name: "Weight Lifting",
      description: "5 Sets",
    },
    {
      name: "Rope Skipping",
      description: "1000",
    },
  ];

  const handleViewAll = () => {
    router.push(`/viewall`);
  };

  return (
    <Box>
      <Box style={styled.workoutHistoryContainer}>
        <Text style={styled.header}>Your Workouts</Text>
        <Button onPress={() => handleViewAll()}>
          <Icon style={styled.icon} as={ArrowRightIcon} />
        </Button>
      </Box>
      <Box>
        {sampleWorkouts.map((workout, index) => (
          <WorkoutSummary
            key={index}
            name={workout.name}
            description={workout.description}
          />
        ))}
      </Box>
    </Box>
  );
};

export { YourWorkouts };
