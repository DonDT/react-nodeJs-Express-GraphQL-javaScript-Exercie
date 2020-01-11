import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = feedback => {
    if (feedback === "good") {
      setGood(good + 1);
    } else if (feedback === "neutral") {
      setNeutral(neutral + 1);
    } else {
      setBad(bad + 1);
    }
  };

  return (
    <div style={{ marginTop: "15px" }}>
      Give Feedback
      <div style={{ marginTop: "15px", marginBottom: "20px" }}>
        <button onClick={() => handleClick("good")}> Good</button>
        <button onClick={() => handleClick("neutral")}> Neutral</button>
        <button onClick={() => handleClick("bad")}> Bad</button>
      </div>
      Statistics
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
