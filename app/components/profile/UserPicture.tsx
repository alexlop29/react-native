/*
  NOTE: (alopez) Configuring the functionality to allow user's to upload a profile pic

  Helpful References:
  - https://rnfirebase.io/storage/usage
  - https://docs.expo.dev/versions/latest/sdk/imagepicker/
  - https://docs.expo.dev/guides/using-firebase/#using-react-native-firebase
*/

// default
import { useState } from "react";

// comps
import { Image, View, StyleSheet, Pressable } from "react-native";
import { Icon } from "@/components/ui/icon";
import { User } from "lucide-react-native";
import { Avatar } from "../ui/avatar";

// deps
import * as ImagePicker from "expo-image-picker";

// styles
const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: "#e1f1f3",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "black",
  },
});

const UserPicture = () => {
  const [image, setImage] = useState<string | null>(null);

  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View>
      {image ? (
        <Pressable onPress={handlePickImage}>
          <Image source={{ uri: image }} style={styles.image} />
        </Pressable>
      ) : (
        <Pressable onPress={handlePickImage}>
          <Avatar style={styles.avatar}>
            <Icon as={User} style={styles.icon} />
          </Avatar>
        </Pressable>
      )}
    </View>
  );
};

export { UserPicture };
