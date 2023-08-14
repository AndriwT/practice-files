import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="main-container mt-8">
        <div className="container rounded-lg">
          <h1>Mediaquery Practice</h1>
        </div>
        <div className="container rounded-lg">
          <h1>I am another container</h1>
        </div>
      </div>
      <button className="click-button rounded-xl">Click me!</button>
    </main>
  );
}
