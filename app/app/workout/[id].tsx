import { View, Text } from "react-native";
import { usePathname } from "expo-router";
import { useState } from "react";
import { router } from "expo-router";

// comps
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Heading } from "@/components/ui/heading";

// deps
import firestore from "@react-native-firebase/firestore";

const Workout = () => {
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  const [name, setName] = useState("");

  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const handleClose = () => setShowAlertDialog(false);

  const handleNameChange = async () => {
    try {
      await firestore().collection("Workouts").doc(id).update({
        name: name,
      });
      console.log("Name updated successfully!");
    } catch (error) {
      // chang to toast or alert
      console.log(error);
    }
  };

  const handleFinish = async () => {
    try {
      await firestore().collection("Workouts").doc(id).update({
        timeEnded: new Date().toJSON(),
      });
      console.log("Workout ended successfully!");
      router.back();
    } catch (error) {
      // chang to toast or alert
      console.log(error);
    }
  };

  return (
    <View>
      {/* Title */}
      <Input
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField
          placeholder="Enter The Workout Name..."
          onChangeText={(text) => setName(text)}
          onBlur={() => handleNameChange()}
        />
      </Input>

      {/* Convert to allow the user to select the exercise and create a set */}
      <>
        <Button onPress={() => setShowAlertDialog(true)}>
          <ButtonText>Open Dialog</ButtonText>
        </Button>
        <AlertDialog isOpen={showAlertDialog} onClose={handleClose} size="md">
          <AlertDialogBackdrop />
          <AlertDialogContent>
            <AlertDialogHeader>
              <Heading className="text-typography-950 font-semibold" size="md">
                Are you sure you want to delete this post?
              </Heading>
            </AlertDialogHeader>
            <AlertDialogBody className="mt-3 mb-4">
              <Text>
                Deleting the post will remove it permanently and cannot be
                undone. Please confirm if you want to proceed.
              </Text>
            </AlertDialogBody>
            <AlertDialogFooter className="">
              <Button
                variant="outline"
                action="secondary"
                onPress={handleClose}
                size="sm"
              >
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button size="sm" onPress={handleClose}>
                <ButtonText>Delete</ButtonText>
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>

      {/* Need to add functionality to track a set, including selecting the exercise */}
      <Button
        size="md"
        variant="solid"
        action="primary"
        onPress={() => handleFinish()}
      >
        <ButtonText>
          <Text>Finish</Text>
        </ButtonText>
      </Button>
      {/* test finish functionality */}
    </View>
  );
};

export default Workout;
