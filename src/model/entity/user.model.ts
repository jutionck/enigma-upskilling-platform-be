import {addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import {db} from "@/config/firebase";

const usersCollection = collection(db, "users");

export const User = {
    async createUser(name: string, email: string) {
        const docRef = await addDoc(usersCollection, { name, email });
        return { id: docRef.id, name, email };
    },

    async getUserById(id: string) {
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);
        return docSnap.exists() ? { id, ...docSnap.data() } : null;
    },

    async getAllUsers() {
        const snapshot = await getDocs(usersCollection);
        return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    },
};