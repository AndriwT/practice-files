import { ChangeEvent, useState } from "react";

interface Tweet {
  id: number;
  text: string;
  timestamp: number;
}

export default function Dashboard() {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState<Tweet[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTweet(e.target.value);
  };

  const handleClick = () => {
    if (!tweet) {
      alert("Nothing to say?");
    } else {
      const newTweet = {
        id: Date.now(),
        text: tweet,
        timestamp: Date.now(),
      };

      setTweets([...tweets, newTweet]);

      setTweet("");
    }
  };

  return (
    <main className="flex  flex-col  mt-10">
      <div className="flex justify-center">
        <input
          className="flex justify-center rounded-l-md shadow-md p-4"
          value={tweet}
          onChange={handleChange}
          placeholder="Say something..."
        />
        <button
          className="bg-red-500 text-white w-20 rounded-r-md shadow-md"
          onClick={handleClick}
        >
          Tweet
        </button>
      </div>
      <div>
        {tweets.map((tweet) => (
          <div
            key={tweet.id}
            className="flex flex-row mt-10 rounded-md shadow-md p-2 justify-between"
          >
            <p className="mr-4">{tweet.text}</p>
            <p className="text-gray-400 text-xs flex flex-col mr-4">
              {new Date(tweet.timestamp).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
