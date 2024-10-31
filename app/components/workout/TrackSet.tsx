import { View } from "react-native";

type InputProps = {
    workout: string;
    exercise: string;
    set_number: number;
}

// should get exercise id, workout id from parent components

/*
Plan the schema for the workout collection
{
    name: string;
    date: string;
    timeSpent: string;
    user: string;
}
*/

/*
Plan the schema for the set collection
{
    workout: string;
    exercise: string;
    set_number: number;
    weight: number;
    reps: number;
}
*/

const TrackSet = ({ exercise, workout }: InputProps) => {
  return (
    <View>

    </View>
  )
}

export { TrackSet };
