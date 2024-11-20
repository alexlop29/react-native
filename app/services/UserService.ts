import { BaseService } from "./BaseService";
import { UserRepository } from "@/repositories";

class UserService extends BaseService {
  userRepository: UserRepository;

  constructor() {
    super();
    this.userRepository = new UserRepository();
  }

  _throwError(message: string, error?: string): void {
    super._throwError("UserService", error);
  }

  async findByAuth0Id(auth0Id: string) {
    return this.userRepository.findByAuth0Id(auth0Id);
  }
}

export { UserService };
