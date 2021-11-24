import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDbiyN4Dxfqx35vh3-wLjeErI-mrH6HyiE",
    authDomain: "fir-tutorial-a8c6b.firebaseapp.com",
    projectId: "fir-tutorial-a8c6b",
    storageBucket: "fir-tutorial-a8c6b.appspot.com",
    messagingSenderId: "692552507592",
    appId: "1:692552507592:web:07267c80e4b91c0cbec5fd",
    measurementId: "G-VTT0P36GMQ"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);