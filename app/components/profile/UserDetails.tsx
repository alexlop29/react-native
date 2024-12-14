// default
import React from "react";
import { StyleSheet } from "react-native";

// comps
import { Box } from "../ui/box";
import { Avatar, AvatarFallbackText, AvatarImage } from "../ui/avatar";
import { VStack } from "../ui/vstack";
import { Text } from "../ui/text";
import { TextInput } from "../input/TextInput";

// deps
import { useStore } from "@tanstack/react-store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { store } from "@/providers";
import { UserService } from "@/services";

// styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const UserDetails = () => {
  const { dbUser } = useStore(store);
  const queryClient = useQueryClient();

  const { mutate: handleChange } = useMutation({
    mutationFn: async ({ value }: { value: string }) => {
      const userService = new UserService();
      if (!dbUser?.id) return;
      return await userService.updateById(dbUser?.id, {
        ...dbUser,
        name: value,
      });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {},
  });

  // need to be able to handle email change (both in Auth0 and in the DB)

  return (
    <Box className="flex-row">
      <Avatar className="mr-4">
        <AvatarFallbackText>
          {dbUser?.name ? dbUser?.name.charAt(0) : ""}
        </AvatarFallbackText>
        <AvatarImage
          source={{
            uri: "https://gluestack.github.io/public-blog-video-assets/camera.png",
          }}
        />
      </Avatar>
      <VStack>
        <TextInput
          prompt={"Enter your name"}
          handleOnBlur={() => handleChange}
          value={dbUser?.name ?? ""}
        />
        <Text size="sm">{dbUser?.email}</Text>
      </VStack>
    </Box>
  );
};

export { UserDetails };
