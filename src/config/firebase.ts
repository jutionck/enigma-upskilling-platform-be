import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import dotenv from "dotenv";

dotenv.config();

// Cek apakah variabel lingkungan terbaca dengan benar
console.log("FIREBASE_API_KEY:", process.env.FIREBASE_API_KEY ? "✅ Loaded" : "❌ Not Found");
console.log("FIREBASE_PROJECT_ID:", process.env.FIREBASE_PROJECT_ID ? "✅ Loaded" : "❌ Not Found");

// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("🔥 Firestore Initialized");

export { db };
