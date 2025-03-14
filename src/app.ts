import { Elysia } from "elysia";
import { routes } from "@/routes";
import {db} from "@/config/firebase.config";

const app = new Elysia().use(routes);

async function testFirestore() {
    try {
        console.log("📡 Checking Firestore connection...");
        const snapshot = await db.collection("users").get();

        if (snapshot.empty) {
            console.log("⚠️ No users found in Firestore.");
        } else {
            console.log("✅ Users fetched:", snapshot.docs.map(doc => doc.data()));
        }
    } catch (error) {
        console.error("❌ Firestore Connection Error:", error);
    }
}

testFirestore();

app.listen(3000, () => {
    console.log(`🚀 Server running at http://localhost:3000`);
});
