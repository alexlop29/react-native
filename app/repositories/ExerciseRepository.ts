import { BaseRepository } from "./BaseRepository";

// reminder need to remove duplicate types!
// reminder need to establish global error handling!
// types
type Exercise = {
    name: string;
};

class ExerciseRepository extends BaseRepository {
  constructor() {
    super();
  };
}

export { ExerciseRepository };
