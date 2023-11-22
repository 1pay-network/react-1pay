import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import React1pay from "../../src/index.js";

React1pay.initialize("0x1563227B1916600037327142E04a457D0effD4fB");

function App() {
  const [count, setCount] = useState(1);

  const handleSend = () => {
    React1pay.pay({
      amount: count * 0.1,
      token: "USDT",
      note: "Pay for nothing",
      onSuccess: (response) => {
        console.log(response);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <>
      <div className="flex justify-center">
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="space-y-4 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Buy 1pay a Coffee
        </h2>
        <input
          min="1"
          value={count}
          placeholder="Number of coffees"
          className="block w-full h-10 px-4 border border-zinc-200 dark:border-zinc-800 rounded-md text-zinc-900 dark:text-zinc-50 bg-white dark:bg-zinc-800"
          type="number"
          onChange={(e) => setCount(e.target.value)}
        />
        <button
          id="sendBtn"
          className="text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 px-4 py-2 w-full h-10 flex justify-center items-center bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-full"
          onClick={handleSend}
        >
          Support ${count * 0.1}
        </button>
      </div>
    </>
  );
}

export default App;
