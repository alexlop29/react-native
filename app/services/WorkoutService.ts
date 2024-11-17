import { BaseService } from "./BaseService";
import { WorkoutRepository } from "@/repositories";

class WorkoutService extends BaseService {
  workoutRepository: WorkoutRepository;

  constructor() {
    super();
    this.workoutRepository = new WorkoutRepository();
  }

  _throwError(message: string, error?: string): void {
    super._throwError("WorkoutService", error);
  };

  findById(id: string) {
    return this.workoutRepository.findWorkoutById(id);
  };

  update(id: string, data: any) {
    return this.workoutRepository.updateWorkoutById(id, data);
  };
}

export { WorkoutService };
