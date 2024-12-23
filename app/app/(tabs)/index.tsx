// default
import { View, StyleSheet } from "react-native";

// comps
import { Card } from "@/components/ui/card";
import { Button, ButtonText } from "@/components/ui/button";
import { UserMetrics } from "@/components/profile/UserMetrics";
import { UserHeader } from "@/components/profile/UserHeader";
import { StartWorkout } from "@/components/workout/StartWorkout";
import { UserGreeting } from "@/components/profile/UserGreeting";

// deps
import { useAuth0 } from "react-native-auth0";
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

const LogoutButton = () => {
  const { clearSession } = useAuth0();

  const onPress = async () => {
    try {
      await clearSession();
    } catch (e) {}
  };

  return (
    <Button onPress={onPress}>
      <ButtonText>Log out</ButtonText>
    </Button>
  );
};

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
      {/* <UserMetrics
        metrics={[
          { title: "Workouts Finished", value: `${data}` },
          { title: "Weights Lifted", value: "15000" },
          { title: "Most Worked", value: "Biceps" },
        ]}
      /> */}
    </Card>
  );
};

export default function HomeScreen() {
  return (
    <View style={styled.container}>
      <Profile />
      <LogoutButton />
    </View>
  );
}
