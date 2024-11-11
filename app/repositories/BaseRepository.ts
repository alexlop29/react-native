import firestore, { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

class BaseRepository {
    protected db: FirebaseFirestoreTypes.Module;

    constructor() {
        // if (process.env.NODE_ENV === "test" || location.hostname === "localhost") {
        //     firestore().useEmulator("127.0.0.1", 8080);
        // }
        this.db = firestore();
    };

    async create(collection: string, data: any): Promise<any> {
        return this.db.collection(collection).add(data);
    };

    async findById(collection: string, id: string): Promise<any> {
        return this.db.collection(collection).doc(id).get();
    };
};

export { BaseRepository };
