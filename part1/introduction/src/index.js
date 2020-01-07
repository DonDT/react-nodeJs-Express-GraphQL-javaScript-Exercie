import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Header = props => {
  return <div>{props.course}</div>;
};

const Content = props => {
  return (
    <div>
      <Part parts={props.parts} />
    </div>
  );
};
const Total = props => {
  return (
    <div>
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </div>
  );
};

const Part = props => {
  return (
    <div>
      <p>
        {" "}
        {props.parts[0].name} {props.parts[0].exercises}
      </p>
      <p>
        {" "}
        {props.parts[1].name} {props.parts[1].exercises}
      </p>
      <p>
        {" "}
        {props.parts[2].name} {props.parts[2].exercises}
      </p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";

  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    }
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <p>
        Number of exercises <Total parts={parts} />
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
