import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDqng0xiXNDfSq0WTcVMOUreInv8aOcVOc",
  authDomain: "firecommerce-4968f.firebaseapp.com",
  projectId: "firecommerce-4968f",
  storageBucket: "firecommerce-4968f.appspot.com",
  messagingSenderId: "446152566808",
  appId: "1:446152566808:web:82408fcb359558f5d47b6d",
  measurementId: "G-E2PDKR763W"
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);

export default fireDB