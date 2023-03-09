import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxa7kDTraUXRbPsUV_cjtKPO45HzIpycE",
  authDomain: "contact-directory-27d93.firebaseapp.com",
  projectId: "contact-directory-27d93",
  storageBucket: "contact-directory-27d93.appspot.com",
  messagingSenderId: "667440427564",
  appId: "1:667440427564:web:8bd8da10533dfa8304d789",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
