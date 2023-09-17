// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApVMumvRA8qX0rgloICFD-H_zlBybaPN4",
  authDomain: "pomodro-timer-23e79.firebaseapp.com",
  projectId: "pomodro-timer-23e79",
  storageBucket: "pomodro-timer-23e79.appspot.com",
  messagingSenderId: "833655423181",
  appId: "1:833655423181:web:41d0e31be778b111efe984",
  measurementId: "G-YKP6PXJ947"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};