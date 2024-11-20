import { BaseRepository } from "./BaseRepository";

type User = {
  email: string;
  name: string;
  auth_token_identifier: string;
};

const COLLECTION = "Users";

class UserRepository extends BaseRepository {
  constructor() {
    super();
  }

  async createUser(user: User) {
    return super.create(COLLECTION, user);
  };

  async findByAuth0Id(auth0Id: string): Promise<any> {
    return this.db
      .collection(COLLECTION)
      .where("auth_token_identifier", "==", auth0Id)
      .get();
  };
}

export { UserRepository };
