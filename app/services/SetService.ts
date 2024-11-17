import { BaseService } from "./BaseService";
import { SetRepository, ExerciseRepository } from "@/repositories";

type Set = {
  workout: string;
  exercise: string;
  set_number: number;
  weight: number | null;
  reps: number | null;
};

class SetService extends BaseService {
  setRepostiory: SetRepository;
  exerciseRepository: ExerciseRepository;

  constructor() {
    super();
    this.setRepostiory = new SetRepository();
    this.exerciseRepository = new ExerciseRepository();
  }

  _throwError(message: string, error?: string): void {
    super._throwError("SetService", error);
  }

  async create(set: Set) {
    return this.setRepostiory.createSet(set);
  }

  async getAllByWorkoutId(id: string) {
    // Retrieves all sets matching the provided workout id
    let data = await this.setRepostiory.getAllSetsByWorkoutId(id);
    let sets = data.docs.map((doc) => doc.data());
    console.log(`alex viewing sets`, sets);

    // Retrieves the exercise name for each set
    let setsWithExerciseNames = await Promise.all(
      sets.map(async (set: any) => {
        let exercise = await this.exerciseRepository.findExerciseById(
          set.exercise
        );
        console.log(`alex viewing exercise`, exercise._data.name);
        return {
          ...set,
          exerciseName: exercise._data.name,
        };
      })
    );
    console.log(`alex viewing sets with exercise names`, setsWithExerciseNames);

    // Group the sets by exercise name
    let groupedSets: any = {};
    setsWithExerciseNames.forEach((set) => {
      if (!groupedSets[set.exerciseName]) {
        groupedSets[set.exerciseName] = [];
      }
      groupedSets[set.exerciseName].push(set);
    });
    console.log(`alex viewing grouped sets`, groupedSets);

    return groupedSets;
  }
}

export { SetService };
