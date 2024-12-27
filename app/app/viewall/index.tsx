// default
import { StyleSheet } from "react-native";

// comps
import { VStack } from "@/components/ui/vstack";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Text } from "@/components/ui/text";
import { WorkoutSummary } from "@/components/workout";

// icons
import Ionicons from "@expo/vector-icons/Ionicons";

// deps
import { WorkoutService } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { store } from "@/providers";
import { useStore } from "@tanstack/react-store";

const ViewAll = () => {
  const { dbUser } = useStore(store);
  const { data, isLoading } = useQuery({
    queryKey: ["workoutHistory"],
    queryFn: async () => {
      const workoutService = new WorkoutService();
      if (dbUser) {
        // would like to also see the num of sets
        return await workoutService.findByUserId(dbUser?.id);
      }
      return [];
    },
    enabled: !!dbUser,
  });

  // Loading state
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Empty state
  if (!data || data.length === 0) {
    return (
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
        headerImage={
          <Ionicons size={310} name="code-slash" style={styles.headerImage} />
        }
      >
        <VStack space="sm">
          <Text>No Workouts</Text>
        </VStack>
      </ParallaxScrollView>
    );
  }

  // Data state
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <VStack space="sm">
        {data?.map((item, index: number) => (
          <WorkoutSummary
            key={index}
            name={item.name}
            description={item.timeEnded}
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
