import { useState } from "react";
import {
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";
import { ExerciseCard } from "./ExerciseCard";

type InputProps = {
  data: WorkoutSummary[];
};

type WorkoutSummary = {
  name: string;
  date: string;
};

interface WorkoutSummaryWithIndex extends WorkoutSummary {
    id: number;
}

const ExerciseCardCarousel = ({ data }: InputProps) => {
  const [current, setCurrent] = useState<WorkoutSummaryWithIndex>({...data[0],id: 0});
  const fling = Gesture.Fling().direction(Directions.RIGHT).onStart(() => handleFling());

  const handleFling = () => {
    let next = current.id + 1;
    setCurrent({...data[next], id: next});
  };

  return (
    <GestureDetector gesture={fling}>
      <ExerciseCard name={current.name} date={current.date}/>
    </GestureDetector>
  );
};

export { ExerciseCardCarousel };
