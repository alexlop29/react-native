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
import { Button, Image, View, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
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

  return <View style={styles.container}>
    <Button title="Pick an image from camera roll" onPress={handlePickImage} />
    {image && <Image source={{ uri: image }} style={styles.image} />}
  </View>;
};

export { UserPicture };
