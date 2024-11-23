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
  const [current, setCurrent] = useState<WorkoutSummaryWithIndex>({
    ...data[0],
    id: 0,
  });

  const handleFlingRight = () => {
    const next = (current.id + 1) % data.length;
    setCurrent({ ...data[next], id: next });
  };

  const handleFlingLeft = () => {
    const prev = (current.id - 1 + data.length) % data.length;
    setCurrent({ ...data[prev], id: prev });
  };

  const flingRight = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onStart(handleFlingRight);

  const flingLeft = Gesture.Fling()
    .direction(Directions.LEFT)
    .onStart(handleFlingLeft);

  const gesture = Gesture.Exclusive(flingRight, flingLeft);

  return (
    <GestureDetector gesture={gesture}>
      <ExerciseCard name={current.name} date={current.date} />
    </GestureDetector>
  );
};

export { ExerciseCardCarousel };
