import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5Vx4h50_j852ZMAFvj9KCVoogNE6SCLI",
  authDomain: "typing-react-9f86a.firebaseapp.com",
  projectId: "typing-react-9f86a",
  storageBucket: "typing-react-9f86a.firebasestorage.app",
  messagingSenderId: "935459962673",
  appId: "1:935459962673:web:b722f422a9bb1f3374fa10",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
