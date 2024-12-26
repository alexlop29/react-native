//default
import { StyleSheet } from "react-native";

//comps
import { Button, ButtonText } from "../ui/button";
import { Box } from "../ui/box";

//deps
import { useAuth0 } from "react-native-auth0";

//styles
import { Colors } from "@/constants/Colors";
const styled = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  button: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
  },
});

const LogOut = () => {
  const { clearSession } = useAuth0();

  const onPress = async () => {
    try {
      await clearSession();
    } catch (e) {}
  };

  return (
    <Box style={styled.container}>
      <Button onPress={onPress} style={styled.button}>
        <ButtonText>Log Out</ButtonText>
      </Button>
    </Box>
  );
};

export { LogOut };

/*
const LogoutButton = () => {
  const { clearSession } = useAuth0();

  const onPress = async () => {
    try {
      await clearSession();
    } catch (e) {}
  };

  return (
    <Button onPress={onPress}>
      <ButtonText>Log out</ButtonText>
    </Button>
  );
};
*/
