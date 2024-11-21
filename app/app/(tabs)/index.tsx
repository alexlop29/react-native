import { Image, StyleSheet, Platform, Button, Text } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import { useAuth0 } from "react-native-auth0";
import { UserService } from "@/services/UserService";
import { useQuery } from "@tanstack/react-query";

const LoginButton = () => {
  const { authorize } = useAuth0();

  const onPress = async () => {
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={onPress} title="Log in" />;
};

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
  const userService = new UserService();
  const { user, error } = useAuth0();

  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      if (!user) return;
      if (!user.sub) return;
      const data = await userService.findByAuth0Id(user.sub);
      if (!user.name || !user.email) return;
      if (data._docs.length === 0) {
        await userService.create({
          email: user.email,
          name: user.name,
          auth_token_identifier: user.sub,
        });
        console.log("created user");
      }
      return data;
    },
    enabled: !!user,
  });

  return (
    <>
      {user && (
        <ThemedView>
          <Text>Logged in as {user.name}</Text>
          <LogoutButton />
        </ThemedView>
      )}
      {!user && (
        <ThemedView>
          <Text>Not logged in</Text>
          <LoginButton />
        </ThemedView>
      )}
      {error && <Text>{error.message}</Text>}
    </>
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
