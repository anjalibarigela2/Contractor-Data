import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANXvwxY6W_bhiuX6N_K_-i7MIKxq9p1w4",
  authDomain: "contractordata-8cf5b.firebaseapp.com",
  projectId: "contractordata-8cf5b",
  storageBucket: "contractordata-8cf5b.appspot.com",
  messagingSenderId: "109390273133",
  appId: "1:109390273133:web:cc44acc676f2ff86983d64",
  measurementId: "G-QCQZXSVJT8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
