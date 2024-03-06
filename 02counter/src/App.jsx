import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  let [error, setError] = useState("");

  const addValue = () => {
    if (counter < 20) {
      counter++;
      console.log(counter);
      setCounter(counter);
      error = "";
      setError(error);
    } else {
      error = "Cannot Increase value more than 20";
      setError(error);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      counter--;
      console.log(counter);
      setCounter(counter);
      error = "";
      setError(error);
    } else {
      error = "Cannot decrease value less than 0";
      setError(error);
    }
  };

  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter Value:{counter} </h2>
      <button onClick={addValue} className="btn">
        Increment Value
      </button>
      <br />
      <button onClick={removeValue} className="btn">
        Decrement Value
      </button>
      <div className="error-message">
        <h4>{error}</h4>
      </div>
    </>
  );
}

export default App;
