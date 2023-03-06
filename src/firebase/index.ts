import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDtFG4Jh-b5punezs-qVFK0XBbdQrchc74",
  authDomain: "blog-app-react-4e13c.firebaseapp.com",
  projectId: "blog-app-react-4e13c",
  storageBucket: "blog-app-react-4e13c.appspot.com",
  messagingSenderId: "642079830237",
  appId: "1:642079830237:web:4afe338c4ed31805522b34",
  measurementId: "G-WBSQB9JZ9P"
};

export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider()
// const analytics = getAnalytics(app);