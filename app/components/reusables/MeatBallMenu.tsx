/*
    NOTE: (alopez) References
    - https://gluestack.io/ui/docs/components/menu
*/

// comps
import { Menu, MenuItem, MenuItemLabel } from "@/components/ui/menu";
import { Button, ButtonIcon } from "@/components/ui/button";

// icons
import { MenuIcon } from "lucide-react-native";

// types
type InputProps = {
  items: MeatBallMenuItem[];
};

type MeatBallMenuItem = {
  value: string;
  icon?: string;
  onPress: () => void;
};

const MeatBallMenu = ({ items }: InputProps) => {
  return (
    <Menu
      placement="top"
      offset={5}
      trigger={({ ...triggerProps }) => {
        return (
          <Button {...triggerProps} size="sm">
            <ButtonIcon as={MenuIcon} />
          </Button>
        );
      }}
    >
      {items.map((item) => (
        <MeatBallItem key={item.value} {...item} />
      ))}
    </Menu>
  );
};

const MeatBallItem = ({ value, onPress }: MeatBallMenuItem) => {
  return (
    <MenuItem key={value} textValue={value}>
      {/* <Icon as={AddIcon} size="sm" className="mr-2" /> */}
      <MenuItemLabel size="sm">{value}</MenuItemLabel>
    </MenuItem>
  );
};

export { MeatBallMenu };
