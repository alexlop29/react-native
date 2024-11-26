import { View } from "react-native";

// comps
import { VStack } from "@/components/ui/vstack";
import { ExerciseCard } from "@/components/workout";

type WorkoutSummary = {
  name: string;
  date: string;
};

const ViewAll = () => {
  const fakeData = [
    {
      name: "Chest and Triceps",
      date: "November 23, 2024",
    },
    {
      name: "Back and Biceps",
      date: "November 20, 2024",
    },
  ];

  return (
    <VStack space="xl" className="mr-4 ml-4 w-100 min-w-full">
      {fakeData.map((item: WorkoutSummary, index: number) => (
        <ExerciseCard key={index} name={item.name} date={item.date} />
      ))}
    </VStack>
  );
};

export default ViewAll;
