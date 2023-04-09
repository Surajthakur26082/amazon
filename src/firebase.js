import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDrRor6a73l8uh_9J2V-Rf2BSeae9b8fA8",
    authDomain: "firstreactapp-f407b.firebaseapp.com",
    projectId: "firstreactapp-f407b",
    storageBucket: "firstreactapp-f407b.appspot.com",
    messagingSenderId: "675319955927",
    appId: "1:675319955927:web:21eb58da1a827c66eb0b92",
    measurementId: "G-HVZ15JYK3S"
  };
  
  const app = initializeApp(firebaseConfig);
  
  export const auth = getAuth(app);

 export default app;      
