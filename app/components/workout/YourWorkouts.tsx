// default
import { StyleSheet } from "react-native";

// comps
import { Box } from "../ui/box";
import { Text } from "../ui/text";
import { Icon } from "../ui/icon";
import { ArrowRightIcon } from "lucide-react-native";

// styles
import { Colors } from "@/constants/Colors";
const styled = StyleSheet.create({
  container: {},
  header: {},
  icon: {},
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

  return (
    <Box>
      <Box>
        <Text>Your Workouts</Text>
        <Icon as={ArrowRightIcon} />
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

const WorkoutCard = ({ name, description }: InputProps) => {
  return (
    <Box>
      <Box>Icon</Box>
      <Box>{name}</Box>
      <Box>
        <Text>{description}</Text>
      </Box>
    </Box>
  );
};

export { YourWorkouts };
