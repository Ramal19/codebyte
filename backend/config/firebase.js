import admin from "firebase-admin";
import { readFileSync } from "fs";

// JSON faylını oxuyuruq
const serviceAccount = JSON.parse(
  readFileSync("./codebyte-2025-firebase-adminsdk-fbsvc-6beca3e28f.json", "utf8")
);

// Firebase Admin SDK-nı işə salırıq
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

export { db, admin };
