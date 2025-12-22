import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDedeRrASAxCv5Z8FmcbKluEY0sEyo38-0",
  authDomain: "wedding-site-f387b.firebaseapp.com",
  projectId: "wedding-site-f387b",
  storageBucket: "wedding-site-f387b.firebasestorage.app",
  messagingSenderId: "633435858250",
  appId: "1:633435858250:web:ab098c21d141c2a17a8db3",
  measurementId: "G-40LDJ8JGPK",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
