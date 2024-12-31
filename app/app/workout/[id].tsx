// default
import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";

// comps
import { WorkoutHeader } from "@/components/workout/WorkoutHeader";
import { WorkoutTable } from "@/components/workout/WorkoutTable";
import { Finish } from "@/components/workout/Finish";

// styles
import { Card } from "@/components/ui/card";
const styled = StyleSheet.create({
  container: {
    padding: 32,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  card: {
    backgroundColor: "#fff",
  },
});

const Workout = () => {
  return (
    <View style={styled.container}>
      <Card style={styled.card}>
        <WorkoutHeader />
        <WorkoutTable />
        <Finish />
      </Card>
    </View>
  );
};

export default Workout;
