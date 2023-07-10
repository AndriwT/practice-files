import { useState } from "react";

const StringInput = () => {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [reverse, setReverse] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      greetings();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const greetings = () => {
    setName("Hello, " + value + "!");
  };

  const reverseValue = () => {
    let reversed = "";

    for (let i = value.length - 1; i >= 0; i--) {
      reversed += value[i];
    }

    let lowercase = reversed.toLowerCase();

    let capitalized = lowercase.charAt(0).toUpperCase() + lowercase.slice(1);

    setReverse("Olleh, " + capitalized + "!");
  };

  return (
    <div>
      <h1>Enter your Name:</h1>
      <input
        placeholder="Name"
        value={value}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
      <button onClick={greetings}>Greet</button>
      <button onClick={reverseValue}>Reverse</button>
      <h1 className="greeting">{name}</h1>
      <h1 className="greeting">{reverse}</h1>
    </div>
  );
};

export default StringInput;
