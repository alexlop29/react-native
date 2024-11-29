import { BaseService } from "./BaseService";
import { WorkoutRepository } from "@/repositories";

type Workout = {
  name: string;
  timeStarted: string;
  timeEnded: string | null;
  user: string | null;
};

interface WorkoutWithId extends Workout {
  id: string;
}

class WorkoutService extends BaseService {
  workoutRepository: WorkoutRepository;

  constructor() {
    super();
    this.workoutRepository = new WorkoutRepository();
  }

  _throwError(message: string, error?: string): void {
    super._throwError("WorkoutService", error);
  }

  create(data: Workout) {
    return this.workoutRepository.createWorkout(data);
  }

  findById(id: string) {
    return this.workoutRepository.findWorkoutById(id);
  }

  findByUserId(userId: string): Promise<WorkoutWithId[]> {
    return this.workoutRepository.findWorkoutByUserId(userId);
  }

  findTotalByUserId(userId: string): Promise<number> {
    return this.workoutRepository.findWorkoutTotalByUserId(userId);
  }

  update(id: string, data: any) {
    return this.workoutRepository.updateWorkoutById(id, data);
  }
}

export { WorkoutService };
