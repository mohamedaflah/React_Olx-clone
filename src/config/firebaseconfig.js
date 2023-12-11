// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth,onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZ8Jw0f75wziFmY1piou73pOj0ymreQIM",
  authDomain: "olx-clone-ec2e3.firebaseapp.com",
  projectId: "olx-clone-ec2e3",
  storageBucket: "olx-clone-ec2e3.appspot.com",
  messagingSenderId: "313741168199",
  appId: "1:313741168199:web:fec7d87383866772d9eb62",
  measurementId: "G-2PKCVCRP5W"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export {app,auth,provider}