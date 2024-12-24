// default
import { View, StyleSheet } from "react-native";

// comps
import { Card } from "@/components/ui/card";
import { UserHeader } from "@/components/profile/UserHeader";
import { StartWorkout } from "@/components/workout/StartWorkout";
import { UserGreeting } from "@/components/profile/UserGreeting";
import { LogOut } from "@/components/reusables/LogOut";

// deps
import { useQuery } from "@tanstack/react-query";
import { WorkoutService } from "@/services";
import { useStore } from "@tanstack/react-store";
import { store } from "@/providers";
import { YourWorkouts } from "@/components/workout/YourWorkouts";

// styles
const styled = StyleSheet.create({
  container: {
    padding: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
  }
});

const Profile = () => {
  const { authUser, dbUser } = useStore(store);

  const { data } = useQuery({
    queryKey: ["workoutHistory"],
    queryFn: async () => {
      const workoutService = new WorkoutService();
      if (authUser?.sub)
        return await workoutService.findTotalByUserId(authUser.sub);
    },
    enabled: !!authUser,
  });

  return (
    <Card style={styled.card}>
      <UserHeader />
      {dbUser?.name && <UserGreeting name={dbUser?.name} />}
      <StartWorkout />
      <YourWorkouts />
      <LogOut />
    </Card>
  );
};

export default function HomeScreen() {
  return (
    <View style={styled.container}>
      <Profile />
    </View>
  );
}
