import { StyleSheet } from "react-native";

// comps
import { VStack } from "@/components/ui/vstack";
import { ExerciseCard } from "@/components/workout";
import ParallaxScrollView from "@/components/ParallaxScrollView";

// icons
import Ionicons from "@expo/vector-icons/Ionicons";

// deps
import { useUser } from "@/providers";
import { WorkoutService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const ViewAll = () => {
  const { user } = useUser();
  const { data } = useQuery({
    queryKey: ["workoutHistory"],
    queryFn: async () => {
      const workoutService = new WorkoutService();
      return await workoutService.findByUserId(user);
    },
    enabled: !!user,
  });

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <VStack space="sm">
        {data?.map((item, index: number) => (
          <ExerciseCard
            key={index}
            name={item.name}
            date={item.timeEnded}
            showImage={false}
            id={item.id}
          />
        ))}
      </VStack>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});

export default ViewAll;
