import {db} from "@/config/firebase.config";

const usersCollection = db.collection("users");

export const User = {
    async createUser(name: string, email: string) {
        const docRef = await usersCollection.add({ name, email });
        return { id: docRef.id, name, email };
    },

    async getUserById(id: string) {
        const docSnap = await usersCollection.doc(id).get();
        return docSnap.exists ? { id, ...docSnap.data() } : null;
    },

    async getAllUsers() {
        try {
            const snapshot = await usersCollection.get();
            if (snapshot.empty) {
                return [];
            }
            return snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
        } catch (error) {
            return [];
        }
    }
};