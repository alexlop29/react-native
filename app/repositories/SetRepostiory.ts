import { BaseRepository } from "./BaseRepository";

const COLLECTION = "Sets";

class SetRepository extends BaseRepository {
  constructor() {
    super();
  }

  async getAllSetsByWorkoutId(id: string) {
    // while avoid setting up firestore subscription for now
    // will leverage tanstack query and query key to refresh instead
    return this.db.collection(COLLECTION).where("workout", "==", id);
  }
}

export { SetRepository };
