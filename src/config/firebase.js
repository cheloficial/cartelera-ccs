import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEZ-oAQqEMcJrj12p4KPluntnO5LOhNKA",
  authDomain: "cartelera-ccs-f8324.firebaseapp.com",
  projectId: "cartelera-ccs-f8324",
  storageBucket: "cartelera-ccs-f8324.appspot.com",
  messagingSenderId: "1019562214067",
  appId: "1:1019562214067:web:8e01fdb0460abec6daa6c6",
  measurementId: "G-Y0RKR84DF0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();