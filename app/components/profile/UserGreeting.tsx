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
  container: {
    flexDirection: "column",
    marginBottom: 16,
    paddingRight: 32,
    paddingLeft: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
  },
});

const UserGreeting = ({ name }: InputProps) => {
  return (
    <Box style={styled.container}>
      <Text style={styled.title}>Hello {name}, </Text>
      <Text style={styled.subtitle}>Ready for a challenge?</Text>
    </Box>
  );
};

export { UserGreeting };
