import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAaL1uHvlJCSm2mctUf6dgMUY6pYPnJmO0",
  authDomain: "admin-dashboard-2be3d.firebaseapp.com",
  projectId: "admin-dashboard-2be3d",
  storageBucket: "admin-dashboard-2be3d.appspot.com",
  messagingSenderId: "497596406587",
  appId: "1:497596406587:web:cfc3a066b0df0277a5351e",
  // measurementId: "G-9DF0CDH6EQ"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };



