import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCzloWbFdgW9zf2l61z8tySaRuLMpAR-ik",
  authDomain: "rick-morty-app-54874.firebaseapp.com",
  projectId: "rick-morty-app-54874",
  storageBucket: "rick-morty-app-54874.appspot.com",
  messagingSenderId: "575669125623",
  appId: "1:575669125623:web:5a260f2d4341532262eef2",
  databaseURL: "https://rick-morty-app-54874-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };