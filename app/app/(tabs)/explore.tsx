import { View } from "react-native";

// import { styled } from "nativewind";

// const StyledView = styled(View);

// components
import { ExerciseInput } from '@/components/ExerciseInput';
import { ExerciseView } from '@/components/ExerciseView';

export default function ExploreScreen() {
  return (
    <View>
        <ExerciseView />
        <ExerciseInput />
    </View>
  );
}
