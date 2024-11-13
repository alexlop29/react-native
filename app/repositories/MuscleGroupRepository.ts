import { BaseRepository } from "./BaseRepository";

const COLLECTION = "MuscleGroups";

type MuscleGroup = {
  id: string;
  name: string;
};

class MuscleGroupRepostiory extends BaseRepository {
  constructor() {
    super();
  }

  async getAllMuscleGroups(): Promise<MuscleGroup[]> {
    return super.getAll(COLLECTION);
  }
}

export { MuscleGroupRepostiory };
