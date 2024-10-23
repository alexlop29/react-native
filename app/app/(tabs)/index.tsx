import { Text, View } from "react-native";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function HomeScreen() {
  return (
      <StyledView className="flex h-screen">
        <StyledView className="flex h-50">
          <Text>Hi</Text>
        </StyledView>
        <StyledView className="h-50">
          <Link href="../workout">Start Training</Link>
          <StyledText className="font-extrabold">Start Training</StyledText>
        </StyledView>
        <View></View>
      </StyledView>
  );
}
