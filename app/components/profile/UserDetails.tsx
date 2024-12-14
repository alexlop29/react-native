import React from "react";
import { StyleSheet } from "react-native";

// comps
import { Box } from "../ui/box";
import { Avatar, AvatarFallbackText, AvatarImage } from "../ui/avatar";
import { VStack } from "../ui/vstack";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";

// styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

// deps
import { useStore } from "@tanstack/react-store";
import { store } from "@/providers";

const UserDetails = () => {
  const { dbUser } = useStore(store);

  // get user details from firestore
  // create text input to allow the user to save and edit their name

  return (
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
        <Text size="sm">{dbUser?.email}</Text>
      </VStack>
    </Box>
  );
};

export { UserDetails };
