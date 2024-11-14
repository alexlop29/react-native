import { BaseService } from "./BaseService";
import { SetRepository } from "@/repositories";

class SetService extends BaseService {
    setRepostiory: SetRepository;

    constructor(){
        super();
        this.setRepostiory = new SetRepository();
    };

    _throwError(message: string, error?: string): void {
        super._throwError("SetService", error);
    };

    async getAllByWorkoutId(id: string){
        let data = await this.setRepostiory.getAllSetsByWorkoutId(id);
        // perform additional parsing here!
    }
}
