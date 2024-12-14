import React from "react";
import { Stack } from "expo-router";
import { Text, Button, Image } from "react-native";

// comps
import ParallaxScrollView from "@/components/ParallaxScrollView";

// deps
import { useAuth0, User } from "react-native-auth0";
import { Store } from "@tanstack/store";
import { useQuery } from "@tanstack/react-query";
import { UserService } from "@/services";

// types
import { User as DBUser } from "@/types";
interface AppState {
  authUser: User | undefined;
  dbUser: DBUser | undefined;
}

export const store = new Store<AppState>({
  authUser: undefined,
  dbUser: undefined,
});

const ContextProvider = () => {
  const { user, error, isLoading } = useAuth0();

  if (user) {
    const { data: details } = useQuery({
      queryKey: ["user"],
      queryFn: async () => {
        const userRepository = new UserService();
        if (user?.sub) return await userRepository.findByAuth0Id(user?.sub);
      },
    });
    store.setState((state) => {
      return {
        ["authUser"]: user as User,
        ["dbUser"]: details as DBUser,
      };
    });
  }

  return (
    <>
      {user && <LayoutProvider />}
      {!user && <SignInAndSignUpProvider />}
      {error && <Text>Oops... {error.message}</Text>}
      {isLoading && <Text>Loading...</Text>}
    </>
  );
};

const LayoutProvider = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
};

const SignInAndSignUpProvider = () => {
  const { authorize } = useAuth0();

  const onPress = async () => {
    try {
      await authorize();
    } catch (e) {}
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={{
            height: 178,
            width: 290,
            bottom: 0,
            left: 0,
            position: "absolute",
          }}
        />
      }
    >
      <Button onPress={onPress} title="Log in" />
    </ParallaxScrollView>
  );
};

export { ContextProvider };
