import React from "react";

function Persons({ personsToShow }) {
  const showList = () =>
    personsToShow.map(person => (
      <div key={person.name}>
        {person.name} {person.number}
      </div>
    ));

  return <div>{showList()}</div>;
}

export default Persons;
