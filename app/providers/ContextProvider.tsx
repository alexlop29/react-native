import { Stack } from "expo-router";
import { Text, Button, Image } from "react-native";
import { useContext, createContext } from "react";

// comps
import ParallaxScrollView from "@/components/ParallaxScrollView";

// auth
import { useAuth0 } from "react-native-auth0";

const UserContext = createContext({});

const ContextProvider = () => {
  const { user, error, isLoading } = useAuth0();

  return (
    <>
      {user && (
        <UserContext.Provider value={user}>
          <LayoutProvider />
        </UserContext.Provider>
      )}
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
    } catch (e) {
      console.log(e);
    }
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

export const useUser = () => useContext(UserContext);
export { ContextProvider };
