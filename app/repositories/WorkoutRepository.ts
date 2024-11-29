import { BaseRepository } from "./BaseRepository";

const COLLECTION = "Workouts";

type Workout = {
  name: string;
  timeStarted: string;
  timeEnded: string | null;
  user: string | null;
};

class WorkoutRepository extends BaseRepository {
  constructor() {
    super();
  }

  async createWorkout(workout: Workout) {
    return super.create(COLLECTION, workout);
  }

  async findWorkoutById(id: string) {
    return super.findById(COLLECTION, id);
  }

  async findWorkoutByUserId(userId: string) {
    return super.findByUserId(COLLECTION, userId);
  }

  async findWorkoutTotalByUserId(userId: string) {
    return super.findTotalByUserId(COLLECTION, userId);
  }

  async updateWorkoutById(id: string, data: any) {
    return super.updateById(COLLECTION, id, data);
  }
}

export { WorkoutRepository };
