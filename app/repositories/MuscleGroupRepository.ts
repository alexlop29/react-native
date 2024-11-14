import { BaseRepository } from "./BaseRepository";

type MuscleGroup = {
  id: string;
  name: string;
};

const COLLECTION = "MuscleGroups";

class MuscleGroupRepostiory extends BaseRepository {
  constructor() {
    super();
  }

  async getAllMuscleGroups(): Promise<MuscleGroup[]> {
    return super.getAll(COLLECTION);
  }
}

export { MuscleGroupRepostiory };
