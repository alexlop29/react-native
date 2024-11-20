import { BaseRepository } from "./BaseRepository";

/*
 Outline Schema for the User Model
 email: string;
 name: string;
 auth_token_identifier: string;
*/

const COLLECTION = "Users";

class UserRepository extends BaseRepository {
  constructor() {
    super();
  }

  // will need to create a new user if they don't exist

  // analyze return statement;
  async findByAuth0Id(auth0Id: string): Promise<any> {
    return this.db
      .collection(COLLECTION)
      .where("auth_token_identifier", "==", auth0Id)
      .get();
  }
}

export { UserRepository };
