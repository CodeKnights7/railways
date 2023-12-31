// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlLAyhFMyBQRPcMadKuADdx48b4H6xjQY",
  authDomain: "railways-2f5eb.firebaseapp.com",
  projectId: "railways-2f5eb",
  storageBucket: "railways-2f5eb.appspot.com",
  messagingSenderId: "569693435075",
  appId: "1:569693435075:web:d47efa3607b85813815e76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };