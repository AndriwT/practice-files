import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-xl">Welcome to Twee-ety!</h1>
      <Link
        className="mt-10 bg-red-500 text-white rounded-md shadow-md p-4"
        href="/dashboard"
      >
        Take me to Dashboard
      </Link>
    </main>
  );
}
