import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [advice, setAdvice] = useState("");

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((prev) => prev + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Give me a Advice</button>
      <p>
        You have read <strong>{count}</strong> pieces of advice
      </p>
    </>
  );
}

export default App;
