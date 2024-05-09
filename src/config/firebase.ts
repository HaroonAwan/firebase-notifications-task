import { initializeApp } from "firebase/app";
import {
  getFirestore,
  connectFirestoreEmulator,
  collection,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnCYFeLHIZRYe5ify5W2ihDdbyqltDbwY",
  authDomain: "fir-notifications-e4d7c.firebaseapp.com",
  projectId: "fir-notifications-e4d7c",
  storageBucket: "fir-notifications-e4d7c.appspot.com",
  messagingSenderId: "639337390078",
  appId: "1:639337390078:web:24088962e83405f5722aaf",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const notificationRef = collection(db, "notifications");

if (location.hostname === "localhost") {
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
}

export default app;
