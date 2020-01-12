import React from "react";

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
const Total = ({ parts }) => {
  const total = parts.reduce((total, amount) => {
    return total + amount.exercises;
  }, 0);

  return <div>Total of {total} exercises</div>;
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
      <p>
        {" "}
        {props.parts[3].name} {props.parts[3].exercises}
      </p>
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />

      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
