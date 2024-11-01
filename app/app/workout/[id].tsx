import { View, Text } from "react-native";
import { usePathname } from "expo-router";
import { useState } from "react";
import { router } from "expo-router";

// comps
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";

// deps
import firestore from "@react-native-firebase/firestore";

const Workout = () => {
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  const [name, setName] = useState("");

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
      {/* Need to add functionality to track a set, including selecting the exercise */}
      <Text>{pathname}</Text>
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
