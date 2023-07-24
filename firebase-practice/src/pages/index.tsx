import { User } from "firebase/auth";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ user }: { user: User | null }) {
  return (
    <main className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-xl mb-20">Welcome to Twee-ety!</h1>
      {user ? (
        <Link
          className="mt-20 bg-red-500 text-white rounded-md shadow-md p-4"
          href="/dashboard"
        >
          Go to Dashboard
        </Link>
      ) : (
        <div>
          <Link
            className="mt-20 mr-10 bg-red-500 text-white rounded-md shadow-md p-4"
            href="/login"
          >
            Log In
          </Link>
          <Link
            className="mt-20 bg-red-500 text-white rounded-md shadow-md p-4"
            href="/register"
          >
            Sign Up
          </Link>
        </div>
      )}
    </main>
  );
}
