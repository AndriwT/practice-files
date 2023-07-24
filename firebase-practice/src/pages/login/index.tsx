import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  async function signIn() {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        window.location.href = "/dashboard";
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert("LOGIN ERROR: " + errorMessage + "ERROR CODE: " + errorCode);
      });
  }

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h1>Log In</h1>
      <div className="flex flex-col justify-center items-center mt-10 w-60">
        <input
          className="flex justify-center rounded-md shadow-md p-2 mt-4"
          onChange={onEmailChange}
          value={email}
          placeholder="Email..."
        />
        <input
          className="flex justify-center rounded-md shadow-md p-2 mt-4"
          onChange={onPasswordChange}
          value={password}
          placeholder="Password..."
        />
        <button
          className="mt-10 bg-red-500 text-white rounded-md shadow-md p-4 w-48"
          onClick={signIn}
        >
          Log In
        </button>
        <Link
          className="mt-2 bg-red-300 text-white text-center rounded-md shadow-md p-4 w-48"
          href="/register"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
}
