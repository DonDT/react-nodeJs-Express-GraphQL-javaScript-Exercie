import React from "react";

function Persons({ personsToShow, handleDeleteItem }) {
  const showList = () =>
    personsToShow.map(person => (
      <div key={person.name}>
        {person.name} {person.number}{" "}
        <button onClick={() => handleDeleteItem(person.id)}>Delete</button>
      </div>
    ));

  return <div>{showList()}</div>;
}

export default Persons;
