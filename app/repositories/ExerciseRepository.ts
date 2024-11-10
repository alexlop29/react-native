import { BaseRepository } from "./BaseRepository";

type Exercise = {
    name: string;
};

const COLLECTION = "Exercises";

class ExerciseRepository extends BaseRepository {
  constructor() {
    super();
  };

  async createExercise(exercise: Exercise) {
    return super.create(COLLECTION, exercise);
  };

  async findExerciseById(id: string) {
    return super.findById(COLLECTION, id);
  }
}

export { ExerciseRepository };
