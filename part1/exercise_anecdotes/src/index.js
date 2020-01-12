import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = props => {
  const [selected, setSelected] = useState(0);
  const [votes, setVote] = useState(
    new Array(6 + 1)
      .join("0")
      .split("")
      .map(parseFloat)
  );
  const [itemVotes, setItemVote] = useState(0);

  const handleClick = item => {
    let randomItem = Math.floor(Math.random() * anecdotes.length);

    setSelected(randomItem);
    //let chosenItemIndex = anecdotes.indexOf(item);

    setItemVote(votes[randomItem]);
  };
  const handleUpdateVote = item => {
    let chosenItemIndex = anecdotes.indexOf(item);

    votes[chosenItemIndex] += 1;
    setVote(votes);
    console.log(votes);
    console.log(votes[chosenItemIndex]);
    setItemVote(votes[chosenItemIndex]);
  };

  return (
    <div>
      {anecdotes[selected]}
      <div>Has {itemVotes} votes</div>
      <div>
        <button onClick={() => handleUpdateVote(anecdotes[selected])}>
          Vote
        </button>
        <button onClick={() => handleClick(anecdotes[selected])}>
          Next Anecdote!
        </button>
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
