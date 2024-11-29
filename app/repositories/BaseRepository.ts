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

  async findByUserId(collection: string, userId: string): Promise<any> {
    let data = await this.db
      .collection(collection)
      .where("user", "==", userId)
      .get();
    return data.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  }

  async findTotalByUserId(collection: string, userId: string): Promise<number> {
    let data = await this.db
      .collection(collection)
      .where("user", "==", userId)
      .get();
    return data.docs.length;
  }

  async getAll(collection: string): Promise<any> {
    let data = await this.db.collection(collection).get();
    return data.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  }

  async updateById(collection: string, id: string, data: any): Promise<any> {
    return this.db.collection(collection).doc(id).update(data);
  }
}

export { BaseRepository };
