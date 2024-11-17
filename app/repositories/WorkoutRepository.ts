import { BaseRepository } from "./BaseRepository";

const COLLECTION = "Workouts";

class WorkoutRepository extends BaseRepository {
  constructor() {
    super();
  }

  async findWorkoutById(id: string) {
    return super.findById(COLLECTION, id);
  }

  async updateWorkoutById(id: string, data: any) {
    return super.updateById(COLLECTION, id, data);
  }
}

export { WorkoutRepository };
