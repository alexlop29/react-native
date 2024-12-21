//default
import { StyleSheet } from "react-native";

//comps
import { Box } from "../ui/box";
import { Text } from "../ui/text";

//types
type InputProps = {
  name: string;
};

//styles
const styled = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 16,
    color: "#666",
  },
});

const UserGreeting = ({ name }: InputProps) => {
  return (
    <Box>
      <Text style={styled.title}>Hello {name}, </Text>
      <Text style={styled.subtitle}>Ready for a challenge?</Text>
    </Box>
  );
};

export { UserGreeting };
