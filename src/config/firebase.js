/** @format */

// import firebase from "firebase/compat/app";
// import firebase from "firebase/compat/app"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
// import "firebase/storage"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APP_KEY,
  authDomain: process.env.REACT_APP_Auth_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,

  // apiKey: "AIzaSyCYFje28C_n4T-YHe2i5mqcT54u-Vv03ek",
  // authDomain: "us-gcp-ame-con-116-npd-1.firebaseapp.com",
  // projectId: "us-gcp-ame-con-116-npd-1",
  // storageBucket: "us-gcp-ame-con-116-npd-1.appspot.com",
  // messagingSenderId: "244053109441",
  // appId: "1:244053109441:web:efaa9a74047f7920820240"
};
const app = initializeApp(firebaseConfig);
//export const auth=app.auth()
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
// const stor=firebase.storage();
export default app;
