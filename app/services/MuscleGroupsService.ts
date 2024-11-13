import { BaseService } from "./BaseService";
import { MuscleGroupRepostiory } from "@/repositories";

class MuscleGroupService extends BaseService{
    muscleGroupRepository: MuscleGroupRepostiory;

    constructor(){
        super();
        this.muscleGroupRepository = new MuscleGroupRepostiory();
    };

    _throwError(message: string, error?: string): void {
        super._throwError("MuscleGroupService", error);
    };

    getAll(){
        return this.muscleGroupRepository.getAllMuscleGroups();
    };
};

export { MuscleGroupService }
