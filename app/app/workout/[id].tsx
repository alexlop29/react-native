import { View, Text } from "react-native";
import { usePathname, router } from "expo-router";
import { useState } from "react";

// comps
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
import { Box } from "@/components/ui/box";
import { SelectExercise } from "@/components/workout";
import { Sets } from "@/components/workout";

// icons
import { ChevronDown } from "lucide-react-native";
import { ChevronUp } from "lucide-react-native";

// deps
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { WorkoutService, SetService } from "@/services";
import { TextInput } from "@/components/reusables";

// types
type Set = {
  workout: string;
  exercise: string;
  set_number: number;
  weight: number;
  reps: number;
};

type SetWithExerciseDetails = Set & {
  exerciseName: string;
};

type SetsGroupedByExercise = {
  [exerciseName: string]: SetWithExerciseDetails[];
};

const Workout = () => {
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const handleClose = () => setShowAlertDialog(false);
  const [name, setName] = useState("");
  const queryClient = useQueryClient();

  const { data: sets } = useQuery({
    queryKey: ["sets", id],
    queryFn: async () => {
      const sets = new SetService();
      console.log(await sets.getAllByWorkoutId(id));
      return (await sets.getAllByWorkoutId(id)) as SetsGroupedByExercise;
    },
    enabled: !!id,
    refetchOnWindowFocus: false,
  });

  const { mutate: handleNameChange } = useMutation({
    mutationFn: async () => {
      const workoutService = new WorkoutService();
      await workoutService.update(id, { name: name });
    },
    onError: (error) => {
      console.log("Error updating exercise name", error);
    },
  });

  const { mutate: handleAddSet } = useMutation({
    mutationFn: async (exercise: string) => {
      const details = sets?.[exercise][0].exercise;

      const setService = new SetService();
      return await setService.create({
        workout: id,
        exercise: details ? details : "",
        set_number: sets ? [exercise].length + 1 : 1,
        weight: 0,
        reps: 0,
      });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["sets"] });
      console.log("Set added", data);
    },
    onError: (error) => {
      console.log("Error adding set", error);
    },
  });

  const { mutate } = useMutation({
    mutationFn: async () => {
      const workoutService = new WorkoutService();
      await workoutService.update(id, { timeEnded: new Date().toJSON() });
      router.back();
    },
    onError: (error) => {
      console.log("Error finishing workout", error);
    },
  });
  const handleFinish = () => {
    mutate();
  };

  return (
    <View>
      <TextInput
        handleOnChange={(text) => setName(text)}
        handleOnBlur={handleNameChange}
        placeholder="Enter the workout name"
      />

      <Accordion
        size="md"
        variant="filled"
        type="single"
        isCollapsible={true}
        isDisabled={false}
        className="m-5 w-[90%] border border-outline-200"
      >
        {sets &&
          Object.entries(sets).map(([exerciseName, exerciseSets], index) => (
            <View key={index}>
              <AccordionItem value={exerciseName}>
                <AccordionHeader>
                  <AccordionTrigger>
                    {({ isExpanded }) => (
                      <>
                        <AccordionTitleText>{exerciseName}</AccordionTitleText>
                        {isExpanded ? (
                          <AccordionIcon as={ChevronUp} className="ml-3" />
                        ) : (
                          <AccordionIcon as={ChevronDown} className="ml-3" />
                        )}
                      </>
                    )}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <AccordionContentText className="w-full">
                    <Box className="rounded-lg overflow-hidden w-full">
                      <Sets sets={exerciseSets} />
                    </Box>
                  </AccordionContentText>
                  <Button
                    size="md"
                    variant="solid"
                    action="primary"
                    onPress={() => handleAddSet(exerciseName)}
                  >
                    <ButtonText>
                      <Text>Add Another Set</Text>
                    </ButtonText>
                  </Button>
                </AccordionContent>
              </AccordionItem>
              <Divider />
            </View>
          ))}
      </Accordion>

      {/* <ShowAlertDialog
        openPrompt="Add Exercise"
        actionPrompt="Select Exercise"
        isOpen={showAlertDialog} // can rename
        handleOpen={handleClose} // can rename
        children={<SelectExercise workout={id} />}
      /> */}

      <Button onPress={() => setShowAlertDialog(true)}>
        <ButtonText>Add Exercise</ButtonText>
      </Button>
      {/* Can add transition here */}
      <AlertDialog isOpen={showAlertDialog} onClose={handleClose} size="md">
        <AlertDialogBackdrop />
        {/* Change the content depending on a state variable ??? */}
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading className="text-typography-950 font-semibold" size="md">
              Select an Exercise
            </Heading>
          </AlertDialogHeader>
          <AlertDialogBody className="mt-3 mb-4">
            <SelectExercise workout={id} />
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button variant="outline" onPress={handleClose} size="sm">
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button size="sm" onPress={handleClose}>
              <ButtonText>Delete</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Button size="md" variant="solid" onPress={handleFinish}>
        <ButtonText>
          <Text>Finish</Text>
        </ButtonText>
      </Button>
    </View>
  );
};

export default Workout;
