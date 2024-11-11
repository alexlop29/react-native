import { ReactNode } from "react";
import { View } from "react-native";

// components
import {
    AlertDialog,
    AlertDialogBackdrop,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
  } from "@/components/ui/alert-dialog";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

// types
type InputProps = {
    children: ReactNode;
    openPrompt: string;
    actionPrompt: string;
    isOpen: boolean;
    handleOpen: () => void;
}

const ShowAlertDialog = ({children, openPrompt, actionPrompt, isOpen, handleOpen}: InputProps) => {
  return (
    <View>
      <Button onPress={handleOpen}>
        <ButtonText>{openPrompt}</ButtonText>
      </Button>
      <AlertDialog isOpen={isOpen} onClose={handleOpen} size="md">
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading className="text-typography-950 font-semibold" size="md">
              {actionPrompt}
            </Heading>
          </AlertDialogHeader>
          <AlertDialogBody className="mt-3 mb-4">
            {children}
            {/* 
            Improve modularity of the component above by allowing the passing of JSX children between props
            Removes the need to pass a workout id into the component.
            */}
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button variant="outline" onPress={handleOpen} size="sm">
              <ButtonText>Cancel</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </View>
  );
};

export { ShowAlertDialog };
