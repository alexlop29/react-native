import { View, Text } from "react-native";

// comps
import { Card } from "../ui/card";
import { Heading } from "../ui/heading";
import { HStack } from "../ui/hstack";
import { Link, LinkText } from "../ui/link";
import { Image } from "../ui/image";
import { useQuery } from "@tanstack/react-query";

type InputProps = {
  name: string;
  date: string;
};

const ExerciseCard = ({ name, date }: InputProps) => {
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

  return (
    <View>
      <Card
        className="p-5 rounded-lg max-w-[300px] m-3 shadow-md"
        variant="elevated"
      >
        {data && (
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
        <Link href="https://gluestack.io/" isExternal>
          <HStack className="items-center">
            <LinkText
              size="sm"
              className="font-semibold text-info-600 no-underline"
            >
              Read Blog
            </LinkText>
            {/* <Icon
              as={ArrowRightIcon}
              size="sm"
              className="text-info-600 mt-0.5 ml-0.5"
            /> */}
          </HStack>
        </Link>
      </Card>
    </View>
  );
};

export { ExerciseCard };
