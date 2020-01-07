import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Header = props => {
  return <div>{props.course}</div>;
};

const Content = props => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  );
};
const Total = props => {
  return <div>{props.exercisesCount}</div>;
};

const Part = props => {
  return (
    <div>
      {props.part} {props.exercises}
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7
  };
  const part3 = {
    name: "State of a component",
    exercises: 14
  };
  // const part1 = "Fundamentals of React";
  // const exercises1 = 10;
  // const part2 = "Using props to pass data";
  // const exercises2 = 7;
  // const part3 = "State of a component";
  // const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <p>
        <Content part1={part1.name} exercises1={part1.exercises} />
      </p>
      <p>
        <Content part2={part2.name} exercises2={part2.exercises} />
      </p>
      <p>
        <Content part3={part3.name} exercises3={part3.exercises} />
      </p>
      <p>
        Number of exercises{" "}
        <Total
          exercisesCount={part1.exercises + part2.exercises + part3.exercises}
        />{" "}
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
