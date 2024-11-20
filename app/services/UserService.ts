import { BaseService } from "./BaseService";
import { UserRepository } from "@/repositories";

type User = {
  email: string;
  name: string;
  auth_token_identifier: string;
};

class UserService extends BaseService {
  userRepository: UserRepository;

  constructor() {
    super();
    this.userRepository = new UserRepository();
  }

  _throwError(message: string, error?: string): void {
    super._throwError("UserService", error);
  }

  async create(user: User) {
    return this.userRepository.createUser(user);
  }

  async findByAuth0Id(auth0Id: string) {
    return this.userRepository.findByAuth0Id(auth0Id);
  }
}

export { UserService };
