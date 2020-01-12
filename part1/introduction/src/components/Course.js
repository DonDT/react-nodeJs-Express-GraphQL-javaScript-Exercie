import React from "react";

const Header = props => {
  return <div>{props.courses}</div>;
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
      {props.parts.map(course => (
        <p key={course.id}>
          {course.name} {course.exercises}
        </p>
      ))}
    </div>
  );
};

const Course = ({ courses }) => {
  return (
    <div>
      <div>
        <Header courses={courses[0].name} />
        <Content parts={courses[0].parts} />

        <Total parts={courses[0].parts} />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Header courses={courses[1].name} />
        <Content parts={courses[1].parts} />

        <Total parts={courses[1].parts} />
      </div>
    </div>
  );
};

export default Course;
