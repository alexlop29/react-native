// default
import { StyleSheet } from "react-native";
import { router } from "expo-router";

// comps
import { Box } from "../ui/box";
import { Text } from "../ui/text";
import { Icon } from "../ui/icon";
import { ArrowRightIcon } from "lucide-react-native";
import { Dumbbell } from "lucide-react-native";
import { Button } from "../ui/button";

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
          <WorkoutCard
            key={index}
            name={workout.name}
            description={workout.description}
          />
        ))}
      </Box>
    </Box>
  );
};

type InputProps = {
  name: string;
  description: string;
};

const styledWorkoutCard = StyleSheet.create({
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

const WorkoutCard = ({ name, description }: InputProps) => {
  return (
    <Box style={styledWorkoutCard.container}>
      <Box style={styledWorkoutCard.innerContainer}>
        <Box style={styledWorkoutCard.iconContainer}>
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

export { YourWorkouts };
