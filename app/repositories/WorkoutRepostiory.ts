import { BaseRepository } from "./BaseRepository";

const COLLECTION = "Workouts";

class WorkoutRepository extends BaseRepository {
  constructor() {
    super();
  }

  updateWorkoutById(id: string, data: any) {
    return super.updateById(COLLECTION, id, data);
  }
}

export { WorkoutRepository };
