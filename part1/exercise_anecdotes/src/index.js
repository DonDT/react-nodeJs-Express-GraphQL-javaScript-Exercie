import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVote] = useState(
    new Array(6 + 1)
      .join("0")
      .split("")
      .map(parseFloat)
  );
  const [itemVotes, setItemVote] = useState(0);
  const [highestVote, setHighVote] = useState(0);
  const [statement, setStatement] = useState("");

  const handleClick = () => {
    let randomItem = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomItem);
    setItemVote(votes[randomItem]);
  };
  const handleUpdateVote = item => {
    let chosenItemIndex = anecdotes.indexOf(item);
    votes[chosenItemIndex] += 1;
    setVote(votes);
    setItemVote(votes[chosenItemIndex]);

    let highVote = highestVote;
    let anecdoteWithHightVote = statement;
    for (let i = 0; i < votes.length; i++) {
      if (votes[i] > highVote) {
        highVote = votes[i];
        anecdoteWithHightVote = anecdotes[i];

        setStatement(anecdoteWithHightVote);
        setHighVote(highVote);
      }
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>Anecdote Of The day</div>
      {anecdotes[selected]}
      <div>Has {itemVotes} votes</div>
      <div>
        <button onClick={() => handleUpdateVote(anecdotes[selected])}>
          Vote
        </button>
        <button onClick={() => handleClick()}>Next Anecdote!</button>
        <div style={{ marginTop: "20px" }}>Anecdote With Most Votes</div>
        <div style={{ marginTop: "20px" }}>{statement}</div>
        <div style={{ marginTop: "20px" }}>
          {highestVote > 0 ? <div> Has {highestVote} votes </div> : null}
        </div>
      </div>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App />, document.getElementById("root"));
