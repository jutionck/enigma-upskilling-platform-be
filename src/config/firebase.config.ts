import admin from "firebase-admin";
import serviceAccount from "../../firebase-key.json";
import { ServiceAccount } from "firebase-admin";

if (!admin.apps.length) {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount as ServiceAccount),
        });
        console.log("✅ Firebase Admin SDK initialized successfully");
    } catch (error) {
        console.error("❌ Firebase Admin SDK initialization failed:", error);
    }
} else {
    console.log("⚠️ Firebase Admin SDK already initialized");
}

export const db = admin.firestore();
