import { BaseService } from "./BaseService";
import { UserRepository } from "@/repositories";
import { User } from "@/types";

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

  async updateById(id: string, data: any) {
    return this.userRepository.updateById(id, data);
  }
}

export { UserService };
