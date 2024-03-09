import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDwZlwaOiQhyuWcAkaFY3T11CBgtKRexXU",
  authDomain: "react-notes-9474c.firebaseapp.com",
  projectId: "react-notes-9474c",
  storageBucket: "react-notes-9474c.appspot.com",
  messagingSenderId: "549749688157",
  appId: "1:549749688157:web:6ed0167925214c08014ab4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")