import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

  apiKey: "",

  authDomain: "",

  projectId: "",

  storageBucket: "",

  messagingSenderId: "",

  appId: ""

};


// Inicializamos la app de Firebase
const app = initializeApp(firebaseConfig);

// Exportamos la referencia a la base de datos (Firestore)
export const db = getFirestore(app);