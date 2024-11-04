import firestore, { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

class BaseRepository {
    protected db: FirebaseFirestoreTypes.Module;

    constructor() {
        this.db = firestore();
    };
};

export { BaseRepository };
