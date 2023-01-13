import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebase = {
  apiKey: "AIzaSyAr3vIkahGzqdMZrhiNCxXmEyPfHVFkY5s",
  authDomain: "online-store-bfaad.firebaseapp.com",
  projectId: "online-store-bfaad",
  storageBucket: "online-store-bfaad.appspot.com",
  messagingSenderId: "24149522576",
  appId: "1:24149522576:web:a21b360ee2dd63df7a0015",
};

//connect to firebase
const app = initializeApp(firebase);

//initialize authentication
export const auth = getAuth(app);

//initialize realtime database
export const db = getDatabase(app);
