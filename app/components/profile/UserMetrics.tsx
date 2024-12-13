import React from "react";
import { View, Text } from "react-native";

type InputProps = {
  metrics: Metric[];
};

type Metric = {
  title: string;
  value: string;
};

const UserMetrics = ({ metrics }: InputProps) => {
  return (
    <View className="mt-16">
      {metrics &&
        metrics.map((metric, index) => {
          return (
            <View key={index} className="flex flex-col">
              <Text>{metric.title}</Text>
              <Text>{metric.value}</Text>
            </View>
          );
        })}
    </View>
  );
};

export { UserMetrics };
