import { BaseService } from "./BaseService";

import { ExerciseRepository } from "@/repositories/ExerciseRepository";

// types
type Exercise = {
  name: string;
};

class ExerciseService extends BaseService {
  exerciseRepository: ExerciseRepository;

  constructor() {
    super();
    this.exerciseRepository = new ExerciseRepository();
  }

  _throwError(error?: string | undefined): void {
    super._throwError("ExerciseService", error);
  }

  create(exercise: Exercise) {
    return this.exerciseRepository.createExercise(exercise);
  }
}

export { ExerciseService };
