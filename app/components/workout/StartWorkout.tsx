//default
import { StyleSheet } from "react-native";

//comps
import { Box } from "../ui/box";
import { Icon } from "../ui/icon";
import { AlarmClock, ChevronRightIcon } from "lucide-react-native";
import { Text } from "../ui/text";
import { Button } from "../ui/button";

//styles
import { Colors } from "@/constants/Colors";
const styled = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 16,
    backgroundColor: Colors.blue.background,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  iconContainer: {
    borderRadius: 32,
    padding: 8,
    backgroundColor: Colors.black.background,
  },
  icon: {
    color: Colors.white.background,
  },
  textContainer: {
    flexDirection: "column",
    alignContent: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subheading: {
    fontSize: 18,
    marginBottom: 16,
  },
  buttonContainer: {
    alignItems: "center",
    backgroundColor: Colors.white.background,
  },
  button: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  iconOne: {
    color: Colors.fadedGray.background,
  },
  iconTwo: {
    color: Colors.lightGray.background,
  },
  iconThree: {
    color: Colors.gray.background,
  },
});

const StartWorkout = () => {
  return (
    <Box style={styled.container}>
      <Box style={styled.iconContainer}>
        <Icon as={AlarmClock} style={styled.icon} />
      </Box>
      <Box style={styled.textContainer}>
        <Text style={styled.subheading}>New Challenge! 🔥</Text>
        <Text style={styled.heading}>Start Your Workout</Text>
      </Box>
      <Box style={styled.buttonContainer}>
        <Button style={styled.button}>
          <Icon as={ChevronRightIcon} style={styled.iconOne} size="sm" />
          <Icon as={ChevronRightIcon} style={styled.iconTwo} size="md" />
          <Icon as={ChevronRightIcon} style={styled.iconThree} size="lg" />
        </Button>
      </Box>
    </Box>
  );
};

export { StartWorkout };
