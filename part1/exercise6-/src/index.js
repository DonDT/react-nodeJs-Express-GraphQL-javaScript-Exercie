import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = ({ handleClick, good, bad, neutral }) => {
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
      <p>All {good + neutral + bad}</p>
      <p>Average {(good + neutral + bad) / 3}</p>
      <p>Positive {good > 0 ? (good / (good + neutral + bad)) * 100 : 0}%</p>
    </div>
  );
};

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
    <Statistics
      handleClick={handleClick}
      good={good}
      bad={bad}
      neutral={neutral}
    />
    // <div style={{ marginTop: "15px" }}>
    //   Give Feedback
    //   <div style={{ marginTop: "15px", marginBottom: "20px" }}>
    //     <button onClick={() => handleClick("good")}> Good</button>
    //     <button onClick={() => handleClick("neutral")}> Neutral</button>
    //     <button onClick={() => handleClick("bad")}> Bad</button>
    //   </div>
    //   Statistics
    //   <p>Good {good}</p>
    //   <p>Neutral {neutral}</p>
    //   <p>Bad {bad}</p>
    //   <p>All {good + neutral + bad}</p>
    //   <p>Average {(good + neutral + bad) / 3}</p>
    //   <p>Positive {good > 0 ? (good / (good + neutral + bad)) * 100 : 0}%</p>
    // </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
