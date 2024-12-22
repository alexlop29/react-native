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
    padding: 32,
    alignItems: "center",
    flexDirection: "row",
  },
  iconContainer: {
    borderRadius: 32,
    padding: 12,
    backgroundColor: Colors.black.background,
    marginRight: 8,
  },
  icon: {
    color: Colors.white.background,
  },
  textContainer: {
    flexDirection: "column",
    alignContent: "center",
    marginLeft: 8,
    marginRight: 8,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 6,
  },
  subheading: {
    fontSize: 12,
    marginBottom: 6,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 16,
    backgroundColor: Colors.white.background,
    marginLeft: 32,
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
        <Text style={styled.heading}>Start Workout</Text>
      </Box>
      <Button style={styled.button}>
        <Icon as={ChevronRightIcon} style={styled.iconOne} />
        <Icon as={ChevronRightIcon} style={styled.iconTwo} />
        <Icon as={ChevronRightIcon} style={styled.iconThree} />
      </Button>
    </Box>
  );
};

export { StartWorkout };
