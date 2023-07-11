import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const removeTodo = (i: ChangeEvent<HTMLButtonElement>) => {
    alert(i);

    todos.splice(i, 1);
    setTodos(todos);
  };

  return (
    <div>
      <input value={todo} onChange={handleChange} />
      <button onClick={addTodo}>Add</button>
      <div>
        {todos.map((value, i) => (
          <div>
            <div>{value}</div>
            <button id={i.toString()} onClick={() => removeTodo(i)}>
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
