import React from "react";
import { View, Text, StyleSheet } from "react-native";

// types
type InputProps = {
  metrics: Metric[];
};
type Metric = {
  title: string;
  value: string;
};

// styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
  },
});

const UserMetrics = ({ metrics }: InputProps) => {
  return (
    <View style={styles.container}>
      {metrics &&
        metrics.map((metric, index) => {
          return (
            <View key={index} className="flex flex-col">
              <Text style={styles.title}>{metric.title}</Text>
              <Text>{metric.value}</Text>
            </View>
          );
        })}
    </View>
  );
};

export { UserMetrics };
