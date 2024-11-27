import { View, Text } from "react-native";
import { router } from "expo-router";

// comps
import { Card } from "../ui/card";
import { Heading } from "../ui/heading";
import { Image } from "../ui/image";
import { Button, ButtonText } from "@/components/ui/button"

// deps
import { useQuery } from "@tanstack/react-query";

type InputProps = {
  id?: string;
  name: string;
  date: string | null;
  showImage?: boolean;
};

const ExerciseCard = ({ id="1", name, date, showImage=true }: InputProps) => {
  const { data } = useQuery({
    queryKey: ["unsplash"],
    queryFn: async () => {
      const url =
        "https://api.unsplash.com/photos/random?query=color&layout=squarish&client_id=v_1DHJ0Jc_5D6y8oBUFIm50GQLfnMRlJy_ykcXX1-dg";
      const data = await fetch(url);
      if (!data) return null;
      const json = await data.json();
      return json.urls.raw;
    },
  });

  const handleOpen = () => {
    router.push(`/workout/${id}`)
  };

  return (
    <View>
      <Card
        className="p-5 rounded-lg max-w-[300px] m-3 shadow-md"
        variant="elevated"
      >
        {showImage && data && (
          <Image
            source={{
              uri: `${data}`,
            }}
            className="mb-6 h-[180px] w-full rounded-md"
            alt="image"
          />
        )}
        <Text className="text-sm font-normal mb-2 text-typography-700">
          {date}
        </Text>
        <Heading size="md" className="mb-4">
          {name}
        </Heading>
        <Button
        size="md"
        variant="solid"
        action="primary"
        onPress={() => handleOpen()}
      >
        <ButtonText>
          <Text>View Workout</Text>
        </ButtonText>
      </Button>
      </Card>
    </View>
  );
};

export { ExerciseCard };
