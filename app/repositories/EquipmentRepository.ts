import { BaseRepository } from "./BaseRepository";

type Equipment = {
    id: string;
    name: string;
};

const COLLECTION = "Equipment";

class EquipmentRepository extends BaseRepository {
    constructor(){
        super();
    };

    async getAllEquipment(): Promise<Equipment[]> {
        return super.getAll(COLLECTION);
    };
};

export { EquipmentRepository };
