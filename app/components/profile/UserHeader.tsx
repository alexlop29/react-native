// default
import { StyleSheet } from "react-native";

// comps
import { Box } from "../ui/box";
import { UserPicture } from "./UserPicture";
import { Icon } from "../ui/icon";
import { BellDot, CircleDot, SettingsIcon } from "lucide-react-native";
import { Button } from "../ui/button";

// styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  avatar: {
    marginRight: 36,
  },
  menu: {
    marginBottom: 8,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#f5f5f5",
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
      <Box style={styles.menu}>
        <Button style={styles.button}>
          <Icon as={SettingsIcon} size="xl" style={styles.icon} />
        </Button>
      </Box>
      <Box style={styles.avatar}>
        <UserPicture />
      </Box>
    </Box>
  );
};

export { UserHeader };
