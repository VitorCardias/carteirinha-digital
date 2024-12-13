import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgiw97J3i7ovxc0Df4Qj0a-_Pg2K2ZAXE",
  authDomain: "carteira-digital-432bf.firebaseapp.com",
  databaseURL: "https://carteira-digital-432bf-default-rtdb.firebaseio.com",
  projectId: "carteira-digital-432bf",
  storageBucket: "carteira-digital-432bf.firebasestorage.app",
  messagingSenderId: "61961054038",
  appId: "1:61961054038:web:daa7d0a92d3c2e993418f7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);