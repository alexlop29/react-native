// default
import React from "react";
import { StyleSheet } from "react-native";

// comps
import { Button } from "@/components/ui/button";
import { Icon } from "../ui/icon";

// styles
import { Colors } from "@/constants/Colors";
const styles = StyleSheet.create({
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

// types
import { LucideIcon } from "lucide-react-native";
type InputProps = {
  icon: LucideIcon;
  backgroundColor?: string;
  color?: string;
};

const RoundedButton = ({ icon, backgroundColor, color }: InputProps) => {
  return (
    <Button style={[styles.button, { backgroundColor }]}>
      <Icon as={icon} style={[styles.icon, { color }]} />
    </Button>
  );
};

export { RoundedButton };
