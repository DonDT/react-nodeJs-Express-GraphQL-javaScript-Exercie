import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick }) => {
  return (
    <div style={{ marginTop: "15px", marginBottom: "20px" }}>
      <button onClick={() => handleClick("good")}> Good</button>
      <button onClick={() => handleClick("neutral")}> Neutral</button>
      <button onClick={() => handleClick("bad")}> Bad</button>
    </div>
  );
};

const Statistic = ({ text, value }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      {text} {value}
    </div>
  );
};

const Statistics = ({ handleClick, good, bad, neutral }) => {
  return (
    <div style={{ marginTop: "15px" }}>
      Give Feedback
      <Button handleClick={handleClick} />
      Statistics
      {good + bad + neutral === 0 ? (
        <div style={{ marginTop: "20px" }}> No Feedback Given </div>
      ) : (
        <div>
          <Statistic text="Good" value={good} />
          <Statistic text="Neutral" value={neutral} />
          <Statistic text="Bad" value={bad} />
          <Statistic text="All" value={good + neutral + bad} />
          <Statistic text="Average" value={(good + neutral + bad) / 3} />
          <Statistic
            text="Positive"
            value={(good > 0 ? (good / (good + neutral + bad)) * 100 : 0) + "%"}
          />
        </div>
      )}
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
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
