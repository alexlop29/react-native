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
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableData,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import { Box } from "@/components/ui/box";

// icons
import { ChevronDown } from "lucide-react-native";
import { ChevronUp } from "lucide-react-native";

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

type SetWithExerciseDetails = Set & {
  exerciseName?: string;
};

type Exercise = {
  name: string;
};

const Workout = () => {
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  const [name, setName] = useState("");

  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const handleClose = () => setShowAlertDialog(false);

  const [sets, setSets] = useState<SetWithExerciseDetails[]>([]);
  console.log(sets);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection("Sets")
      .where("workout", "==", id)
      .onSnapshot(
        async (querySnapshot) => {
          const returnedSets: SetWithExerciseDetails[] = await Promise.all(
            querySnapshot.docs.map(async (documentSnapshot) => {
              const data = documentSnapshot.data() as Set;
              try {
                const exerciseRef = firestore()
                  .collection("Exercises")
                  .doc(data.exercise);

                const exerciseSnapshot = await exerciseRef.get();
                if (exerciseSnapshot.exists) {
                  const exerciseSnapshotData =
                    exerciseSnapshot.data() as Exercise;
                  return {
                    ...data,
                    exerciseName: exerciseSnapshotData?.name,
                  };
                }
              } catch (error) {
                console.error("Error fetching exercise details: ", error);
              }
              return data;
            })
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

      <Accordion
        size="md"
        variant="filled"
        type="single"
        isCollapsible={true}
        isDisabled={false}
        className="m-5 w-[90%] border border-outline-200"
      >
        {sets.map((set, index) => (
          <View key={index}>
            <AccordionItem value="a">
              <AccordionHeader>
                <AccordionTrigger>
                  {({ isExpanded }) => {
                    return (
                      <>
                        <AccordionTitleText>
                          {set?.exerciseName}
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
                  {/* Add data tale to display the first set */}
                  {/* DONE */}

                  {/* Update handleQuery to also group all of the sets by exercise and display ordered by set number */}

                  {/* // need to add the func to add another set

                  {/*       // before this, need to add the func to add another set
      // need to update this query to also group all of the sets by exercise */}

                  <Box className="rounded-lg overflow-hidden w-full">
                    <Table className="w-full">
                      <TableHeader>
                        <TableRow>
                          <TableHead>Set</TableHead>
                          <TableHead>Weight</TableHead>
                          <TableHead>Reps</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableData>Rajesh Kumar</TableData>
                          <TableData>rajesh@example.com</TableData>
                          <TableData>1234567890</TableData>
                        </TableRow>
                        <TableRow>
                          <TableData>Priya Sharma</TableData>
                          <TableData>priya@example.com</TableData>
                          <TableData>1234567890</TableData>
                        </TableRow>
                      </TableBody>
                      <TableCaption>
                        Add another set / Convert into pressable button
                      </TableCaption>
                    </Table>
                  </Box>
                </AccordionContentText>
              </AccordionContent>
            </AccordionItem>
            <Divider />
          </View>
        ))}
      </Accordion>

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
