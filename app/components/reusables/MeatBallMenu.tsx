/*
    NOTE: (alopez) References
    - https://gluestack.io/ui/docs/components/menu
    - https://gluestack.io/ui/docs/components/popover
*/
// default
import { useState } from "react";
import { Pressable } from "react-native";

// comps
import { Menu, MenuItem, MenuItemLabel } from "../ui/menu";
import { Button, ButtonText } from "../ui/button";
import { Icon } from "../ui/icon";
import {
  Plus as AddIcon,
  GlobeIcon,
  PlayIcon,
  SettingsIcon,
} from "lucide-react-native";

// types
type InputProps = {
  items: MeatBallMenuItem[];
};

type MeatBallMenuItem = {
  value: string;
  icon?: string;
  onPress: () => void;
};

const MeatBallMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Menu
      placement="bottom left"
      offset={5}
      disabledKeys={["Settings"]}
      trigger={({ ...triggerProps }) => {
        return (
          <Button {...triggerProps}>
            <ButtonText>Menu</ButtonText>
          </Button>
        );
      }}
    >
      <MenuItem key="Add account" textValue="Add account">
        <Icon as={AddIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Add account</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Community" textValue="Community">
        <Icon as={GlobeIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Community</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Plugins" textValue="Plugins">
        <Icon as={PlayIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Plugins</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Settings" textValue="Settings">
        <Icon as={SettingsIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Settings</MenuItemLabel>
      </MenuItem>
    </Menu>
  );
};

// const MeatBallMenu = ({ items }: InputProps) => {
//   return (
//     <Menu
//       placement="top"
//       offset={5}
//       trigger={({ ...triggerProps }) => {
//         return (
//           <Button {...triggerProps} size="sm">
//             <ButtonIcon as={MenuIcon} />
//           </Button>
//         );
//       }}
//     >
//       {items.map((item) => (
//         <MeatBallItem key={item.value} {...item} />
//       ))}
//     </Menu>
//   );
// };

// const MeatBallItem = ({ value, onPress }: MeatBallMenuItem) => {
//   return (
//     <MenuItem key={value} textValue={value}>
//       {/* <Icon as={AddIcon} size="sm" className="mr-2" /> */}
//       <MenuItemLabel size="sm">{value}</MenuItemLabel>
//     </MenuItem>
//   );
// };

export { MeatBallMenu };
