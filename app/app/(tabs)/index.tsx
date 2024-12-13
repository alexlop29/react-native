import { Image, StyleSheet } from "react-native";

// comps
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Card } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import { Box } from "@/components/ui/box";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";

// deps
import { useAuth0 } from "react-native-auth0";
import { useQuery } from "@tanstack/react-query";
import { WorkoutService } from "@/services";

import { useStore } from "@tanstack/react-store";
import { store } from "@/providers";
import { UserMetrics } from "@/components/profile/UserMetrics";

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
  const { user } = useStore(store);

  const { data } = useQuery({
    queryKey: ["workoutHistory"],
    queryFn: async () => {
      const workoutService = new WorkoutService();
      if (user?.sub) return await workoutService.findTotalByUserId(user.sub);
    },
    enabled: !!user,
  });

  // return (
  // <Card className="gap-y-4">
  //   <Text>Email Address: {user?.email}</Text>
  //   <Divider />
  //   <Text>Total Workouts Finished: {data}</Text>
  // </Card>

  return (
    <Card className="p-6 rounded-lg max-w-[360px] m-3">
      <Box className="flex-row">
        <Avatar className="mr-4">
          <AvatarFallbackText>JD</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: "https://gluestack.github.io/public-blog-video-assets/camera.png",
            }}
          />
        </Avatar>
        <VStack>
          <Heading size="md" className="mb-1">
            Jane Doe
          </Heading>
          <Text size="sm">{user?.email}</Text>
        </VStack>
      </Box>
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
