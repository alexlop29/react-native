import { Image, StyleSheet, Button, Text } from "react-native";

// comps
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Card } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";

// deps
import { useAuth0 } from "react-native-auth0";
import { useUser } from "@/providers";
import { useQuery } from "@tanstack/react-query";
import { WorkoutService } from "@/services";

const LogoutButton = () => {
  const { clearSession } = useAuth0();

  const onPress = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={onPress} title="Log out" />;
};

const Profile = () => {
  const { user } = useUser();
  if (user) {
    console.log(`checking user in Profile`, user);
  }
  const { data } = useQuery({
    queryKey: ["workoutHistory"],
    queryFn: async () => {
      const workoutService = new WorkoutService();
      console.log(
        `checking workoutService`,
        await workoutService.findTotalByUserId(user)
      );
      return await workoutService.findTotalByUserId(user);
    },
    enabled: !!user,
  });

  return (
    <Card className="gap-y-4">
      <Text>Email Address</Text>
      <Divider />
      <Text>Total Workouts Finished: {data}</Text>
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
