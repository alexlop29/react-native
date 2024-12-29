// default
import { StyleSheet } from "react-native";

// comps
import { Box } from "../ui/box";
import { UserPicture } from "./UserPicture";
import { Icon } from "../ui/icon";
import { SettingsIcon } from "lucide-react-native";
import { RoundedButton } from "../reusables/RoundedButton";

// styles
import { Colors } from "@/constants/Colors";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
});

const UserHeader = () => {
  return (
    <Box style={styles.container}>
      <Box>
        <RoundedButton
          icon={SettingsIcon}
          backgroundColor={Colors.blue.background}
          color="black"
        />
      </Box>
      <Box>
        <UserPicture />
      </Box>
    </Box>
  );
};

export { UserHeader };
