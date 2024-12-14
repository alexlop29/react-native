import { Image, StyleSheet } from "react-native";

// comps
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Card } from "@/components/ui/card";
import { Button, ButtonText } from "@/components/ui/button";
import { UserMetrics } from "@/components/profile/UserMetrics";
import { UserDetails } from "@/components/profile/UserDetails";

// deps
import { useAuth0 } from "react-native-auth0";
import { useQuery } from "@tanstack/react-query";
import { WorkoutService } from "@/services";
import { useStore } from "@tanstack/react-store";
import { store } from "@/providers";

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
  const { authUser } = useStore(store);

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
    <Card className="p-6 rounded-lg max-w-[360px] m-3">
      <UserDetails />
      <UserMetrics
        metrics={[
          { title: "Workouts Finished", value: `${data}` },
          { title: "Weights Lifted", value: "15000" },
          { title: "Most Worked", value: "Biceps" },
        ]}
      />
    </Card>
  );
};

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <Profile />
      <LogoutButton />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
