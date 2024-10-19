import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import firestore from '@react-native-firebase/firestore';

type Exercise = {
    name: string;
};

const ExerciseView = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const querySnapshot = await firestore()
          .collection('Exercises')
          .get();

        const exerciseList: Exercise[] = querySnapshot.docs.map(documentSnapshot => 
          documentSnapshot.data() as Exercise
        );

        setExercises(exerciseList);
      } catch (error) {
        console.error("Error fetching exercises: ", error);
      }
    };

    fetchExercises();
  }, []);

  return (
    <View>
      {exercises.map((exercise, index) => (
        <Text key={index}>{exercise.name}</Text>
      ))}
    </View>
  );
};

export { ExerciseView };
