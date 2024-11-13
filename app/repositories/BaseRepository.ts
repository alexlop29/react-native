import firestore, {
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";

class BaseRepository {
  protected db: FirebaseFirestoreTypes.Module;

  constructor() {
    this.db = firestore();
  }

  async create(collection: string, data: any): Promise<any> {
    return this.db.collection(collection).add(data);
  }

  async findById(collection: string, id: string): Promise<any> {
    return this.db.collection(collection).doc(id).get();
  }

  async getAll(collection: string): Promise<any> {
    return this.db.collection(collection).get();
  }
}

export { BaseRepository };
