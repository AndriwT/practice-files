import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { doc } from "@firebase/firestore";
import { setDoc } from "firebase/firestore";
import { firestore } from "../../firebase/clientApp";

const AddTodo: NextPage = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const addTodo = async () => {
    const timestamp: string = Date.now().toString();

    const _todo = doc(firestore, `todos/${timestamp}`);

    const todoData = {
      title,
      description,
      done: false,
    };
    try {
      await setDoc(_todo, todoData);
      setMessage("Todo added successfully");

      setTitle("");
      setDescription("");
    } catch (error) {
      setError("An error occurred while adding todo");
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!title || !description) {
      return setError("All field are required");
    } else {
      addTodo();
    }
  };

  return (
    <div>
      <Head>
        <title>Add todo</title>
        <meta name="description" content="Next.js firebase todos app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Add todo</h1>
        <form onSubmit={handleSubmit}>
          {error ? (
            <div>
              <p>{error}</p>
            </div>
          ) : null}
          {message ? (
            <div>
              <p>
                {message}. Proceed to <a href="/">Home</a>
              </p>
            </div>
          ) : null}
          <div>
            <label>Title</label>
            <input
              type="text"
              value={title}
              placeholder="Todo title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              value={description}
              placeholder="Todo description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
