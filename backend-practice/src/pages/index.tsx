import Image from "next/image";
import { Inter } from "next/font/google";
import { firestore } from "../../firebase/clientApp";
import { useEffect, useState } from "react";
import {
  collection,
  QueryDocumentSnapshot,
  DocumentData,
  query,
  where,
  limit,
  getDocs,
} from "@firebase/firestore";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [todos, setTodos] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const todosCollection = collection(firestore, "todos");

  const getTodos = async () => {
    const todosQuery = query(
      todosCollection,
      where("done", "==", false),
      limit(10)
    );

    const querySnapshot = await getDocs(todosQuery);

    const result: QueryDocumentSnapshot<DocumentData>[] = [];
    querySnapshot.forEach((snapshot) => {
      result.push(snapshot);
    });

    setTodos(result);
  };

  useEffect(() => {
    getTodos();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Hello!</h1>
      <div>
        {loading ? (
          <div>
            <h2>Loading...</h2>
          </div>
        ) : todos.length === 0 ? (
          <div>
            <h2>No undone todos</h2>
            <p>
              Consider adding a todo from <a href="/add-todo">here</a>
            </p>
          </div>
        ) : (
          todos.map((todo) => {
            return (
              <div>
                <h2>{todo.data.arguments["title"]}</h2>
                <p>{todo.data.arguments["description"]}</p>
                <div>
                  <button type="button">Mark as done</button>
                  <button type="button">Delete</button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </main>
  );
}
