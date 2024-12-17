// default
import React from "react";
import { StyleSheet } from "react-native";

// comps
import { Box } from "../ui/box";
import { VStack } from "../ui/vstack";
import { Text } from "../ui/text";
import { TextInput } from "../input/TextInput";
import { UserPicture } from "./UserPicture";

// deps
import { useStore } from "@tanstack/react-store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { store } from "@/providers";
import { UserService } from "@/services";

// styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  avatar: {
    marginRight: 36,
  },
  user: {
    marginBottom: 8,
  },
});

/*
  NOTE: (alopez) Configuring the functionality to allow user's to upload a profile pic

  Helpful References:
  - https://rnfirebase.io/storage/usage
  - https://docs.expo.dev/versions/latest/sdk/imagepicker/
  - https://docs.expo.dev/guides/using-firebase/#using-react-native-firebase
*/

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
    <Box style={styles.container}>
      <Box style={styles.avatar}>
        <UserPicture />
      </Box>
      <VStack>
        <Box style={styles.user}>
          <TextInput
            prompt={"Enter your name"}
            handleOnBlur={() => handleChange}
            value={dbUser?.name ?? ""}
            // styles={styles.heading}
          />
        </Box>
        <Text>{dbUser?.email}</Text>
      </VStack>
    </Box>
  );
};

export { UserDetails };
