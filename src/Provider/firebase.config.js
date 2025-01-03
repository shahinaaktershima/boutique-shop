// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0jYzDE2ow-T9n9WDtTL0sUSAOoNXc8-Y",
  authDomain: "tradeswift-63426.firebaseapp.com",
  projectId: "tradeswift-63426",
  storageBucket: "tradeswift-63426.appspot.com",
  messagingSenderId: "762092318674",
  appId: "1:762092318674:web:909e352623fafc3f15a20b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;