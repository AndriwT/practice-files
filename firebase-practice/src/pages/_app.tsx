import "@/styles/globals.css";
import type { AppProps } from "next/app";

// FIREBASE ---------------------------------------------------------

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { use, useEffect, useState } from "react";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD91zZXcoAkoYIekXjB2D6otlEAwne22DU",
  authDomain: "twe-ety.firebaseapp.com",
  projectId: "twe-ety",
  storageBucket: "twe-ety.appspot.com",
  messagingSenderId: "976389703275",
  appId: "1:976389703275:web:0104807a3d49586789532e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// FIREBASE ---------------------------------------------------------

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (u) => {
      if (u) {
        setUser(u);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, []);

  if (loading) return null;

  return <Component {...pageProps} user={user} />;
}
