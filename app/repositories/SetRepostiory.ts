import { BaseRepository } from "./BaseRepository";

const COLLECTION = "Sets";

class SetRepository extends BaseRepository {
  constructor() {
    super();
  }

  async createSet(set: any) {
    return super.create(COLLECTION, set);
  }

  async getAllSetsByWorkoutId(id: string) {
    return this.db.collection(COLLECTION).where("workout", "==", id).get();
  }
}

export { SetRepository };
