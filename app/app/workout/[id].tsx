import { View, Text } from "react-native";
import { usePathname } from "expo-router";
import { useState, useEffect } from "react";
import { router } from "expo-router";

// ext. comps
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
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
  AccordionIcon,
  AccordionContent,
  AccordionContentText,
  AccordionTitleText,
} from "@/components/ui/accordion";
import { Divider } from "@/components/ui/divider";

// icons
import { ChevronDown } from 'lucide-react-native';
import { ChevronUp } from 'lucide-react-native';

// int. comps
import { SelectExercise } from "@/components/workout";

// deps
import firestore from "@react-native-firebase/firestore";

// types
type Set = {
  workout: string;
  exercise: string;
  set_number: number;
  weight: number;
  reps: number;
};

const Workout = () => {
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  const [name, setName] = useState("");

  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const handleClose = () => setShowAlertDialog(false);

  const [sets, setSets] = useState<Set[]>([]);

  // create a useeffect similar to select exercise to get the sets tracked in the workout
  useEffect(() => {
    const unsubscribe = firestore()
      .collection("Exercises")
      .onSnapshot(
        (querySnapshot) => {
          const returnedSets: Set[] = querySnapshot.docs.map(
            (documentSnapshot) =>
              ({
                ...documentSnapshot.data(),
              } as Set)
          );

          setSets(returnedSets);
        },
        (error) => {
          console.error("Error fetching exercises: ", error);
        }
      );

    return () => unsubscribe();
  }, []);

  // can create into a class to handle the logic of updating a class

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

      {/*     // with the useeffect in place, add the functionality to display list of tracked exercises and sets as follows
  // accordion with exercise names
  // inside accordion, display the sets as a data table */}

      <Accordion
        size="md"
        variant="filled"
        type="single"
        isCollapsible={true}
        isDisabled={false}
        className="m-5 w-[90%] border border-outline-200"
      >
        {/* Replace accordianitems with exercises, and Add a placeholder for the data table to display the sets */}
        <AccordionItem value="a">
          <AccordionHeader>
            <AccordionTrigger>
              {({ isExpanded }) => {
                return (
                  <>
                    <AccordionTitleText>
                      How do I place an order?
                    </AccordionTitleText>
                    {isExpanded ? (
                      <AccordionIcon as={ChevronUp} className="ml-3" />
                    ) : (
                      <AccordionIcon as={ChevronDown} className="ml-3" />
                    )}
                  </>
                );
              }}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <AccordionContentText>
              To place an order, simply select the products you want, proceed to
              checkout, provide shipping and payment information, and finalize
              your purchase.
            </AccordionContentText>
          </AccordionContent>
        </AccordionItem>
        <Divider />
        <AccordionItem value="b">
          <AccordionHeader>
            <AccordionTrigger>
              {({ isExpanded }) => {
                return (
                  <>
                    <AccordionTitleText>
                      What payment methods do you accept?
                    </AccordionTitleText>
                    {isExpanded ? (
                      <AccordionIcon as={ChevronUp} className="ml-3" />
                    ) : (
                      <AccordionIcon as={ChevronDown} className="ml-3" />
                    )}
                  </>
                );
              }}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <AccordionContentText>
              We accept all major credit cards, including Visa, Mastercard, and
              American Express. We also support payments through PayPal.
            </AccordionContentText>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Should only show dialog when the user is first starting the workout */}
      {/* otherwise display an add exercise or add exercise button */}
      {/* Convert to allow the user to select the exercise and create a set */}
      <>
        <Button onPress={() => setShowAlertDialog(true)}>
          {/* Works well / Present ability to select an exercise and create a set */}
          <ButtonText>Add Exercise</ButtonText>
        </Button>
        <AlertDialog isOpen={showAlertDialog} onClose={handleClose} size="md">
          <AlertDialogBackdrop />
          <AlertDialogContent>
            <AlertDialogHeader>
              <Heading className="text-typography-950 font-semibold" size="md">
                Select an Exercise
              </Heading>
            </AlertDialogHeader>
            <AlertDialogBody className="mt-3 mb-4">
              <SelectExercise workout={id} />
              {/* Will need the abilit to display adding additonal sets to the workout // could be in explore comp */}
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
