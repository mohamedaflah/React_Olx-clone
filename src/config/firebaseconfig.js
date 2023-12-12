// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, onAuthStateChanged } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAZ8Jw0f75wziFmY1piou73pOj0ymreQIM",
//   authDomain: "olx-clone-ec2e3.firebaseapp.com",
//   projectId: "olx-clone-ec2e3",
//   storageBucket: "olx-clone-ec2e3.appspot.com",
//   messagingSenderId: "313741168199",
//   appId: "1:313741168199:web:fec7d87383866772d9eb62",
//   measurementId: "G-2PKCVCRP5W",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBjxd8yAIbZjbp4gOrDKrUPsH_ac9gh-oQ",
  authDomain: "olxtest-28ed1.firebaseapp.com",
  projectId: "olxtest-28ed1",
  storageBucket: "olxtest-28ed1.appspot.com",
  messagingSenderId: "242743656905",
  appId: "1:242743656905:web:c17973b11dcd9d60d26818",
  measurementId: "G-MD51VW30V2",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage();
const provider = new GoogleAuthProvider();
export {
  app,
  auth,
  provider,
  ref,
  uploadBytes,
  getDownloadURL,
  getFirestore,
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  storage,
  firestore,
};
