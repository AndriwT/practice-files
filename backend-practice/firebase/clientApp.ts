import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

initializeApp({
  apiKey: "AIzaSyCKZEy1TAJ-6p3Goh7iojH5H0YcvlS1YLQ",
  authDomain: "backend-practice-4295e.firebaseapp.com",
  projectId: "backend-practice-4295e",
  storageBucket: "backend-practice-4295e.appspot.com",
  messagingSenderId: "530798676720",
  appId: "1:530798676720:web:e4587acb875e5185d21035",
  measurementId: "G-R1GV9NDX3H"
})

const firestore = getFirestore();

export {firestore};