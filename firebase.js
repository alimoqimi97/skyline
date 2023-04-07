import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRmzf-Oxdhgki_uj68edr5_CQ_xV5-K84",
  authDomain: "firechat-82a1a.firebaseapp.com",
  projectId: "firechat-82a1a",
  storageBucket: "firechat-82a1a.appspot.com",
  messagingSenderId: "724329583466",
  appId: "1:724329583466:web:2f1386aac8f31a0b264b13",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
