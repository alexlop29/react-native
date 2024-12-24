// default
import { StyleSheet } from "react-native";

// comps
import { Box } from "../ui/box";
import { UserPicture } from "./UserPicture";
import { Icon } from "../ui/icon";
import { SettingsIcon } from "lucide-react-native";
import { Button } from "../ui/button";

// styles
import { Colors } from "@/constants/Colors";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: Colors.blue.background,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "black",
  },
});

const UserHeader = () => {
  return (
    <Box style={styles.container}>
      <Box>
        <Button style={styles.button}>
          <Icon as={SettingsIcon} size="xl" style={styles.icon} />
        </Button>
      </Box>
      <Box>
        <UserPicture />
      </Box>
    </Box>
  );
};

export { UserHeader };
