import { BaseRepository } from "./BaseRepository";

const COLLECTION = "MuscleGroups";

class MuscleGroupRepostiory extends BaseRepository {
  constructor() {
    super();
  }

  async getAllMuscleGroups() {
    return super.getAll(COLLECTION);
  }
}

export { MuscleGroupRepostiory };
