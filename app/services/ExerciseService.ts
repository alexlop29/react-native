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
    };

    create(exercise: Exercise) {
        return this.exerciseRepository.createExercise(exercise);
    }

};

export { ExerciseService };
