import { BaseService } from "./BaseService";
import { EquipmentRepository } from "@/repositories";

class EquipmentService extends BaseService {
  equipmentRepository: EquipmentRepository;

  constructor() {
    super();
    this.equipmentRepository = new EquipmentRepository();
  }

  _throwError(message: string, error?: string): void {
    super._throwError("EquipmentService", error);
  }

  getAll() {
    return this.equipmentRepository.getAllEquipment();
  }
};

export { EquipmentService };
