import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleSubmitForm = event => {
    event.preventDefault();

    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        alert(`${newName} is already added to phonebook`);
      }
    }

    setPersons(persons.concat({ name: newName }));
    setNewName("");
  };

  const handleSubmitNewName = event => {
    setNewName(event.target.value);
  };

  const showList = () =>
    persons.map(person => <div key={person.name}>{person.name}</div>);

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmitForm}>
        <div>
          name: <input value={newName} onChange={handleSubmitNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{showList()}</div>
    </div>
  );
};

export default App;
