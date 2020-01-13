import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [searchName, setSearchName] = useState("");

  const handleSubmitForm = event => {
    event.preventDefault();

    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        alert(`${newName} is already added to phonebook`);
      }
    }

    setPersons(persons.concat({ name: newName, number: newNumber }));
    setNewName("");
    setNewNumber("");
  };

  const handleSubmitNewName = event => {
    setNewName(event.target.value);
  };
  const handleSubmitNewNumber = event => {
    setNewNumber(event.target.value);
  };

  const showList = () =>
    personsToShow.map(person => (
      <div key={person.name}>
        {person.name} {person.number}
      </div>
    ));

  const personsToShow = showAll
    ? persons
    : persons.filter(person =>
        person.name.toLowerCase().includes(searchName.toLowerCase())
      );

  const handleSearchTerm = event => {
    setSearchName(event.target.value);
    setShowAll(false);
    console.log(searchName);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div style={{ marginTop: "15px", marginBottom: "15px" }}>
        filter shown with{" "}
        <input value={searchName} onChange={handleSearchTerm} />
      </div>
      <form onSubmit={handleSubmitForm}>
        <div>
          name: <input value={newName} onChange={handleSubmitNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleSubmitNewNumber} />
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
