import firestore, { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

class BaseRepository {
    protected db: FirebaseFirestoreTypes.Module;

    constructor() {
        this.db = firestore();
    };

    // Is the return type correct?
    // can switch any to an array of potential types
    // once type definitions are created
    create(collection: string, data: any): Promise<FirebaseFirestoreTypes.DocumentReference> {
        return this.db.collection(collection).add(data);
    };
};

export { BaseRepository };
