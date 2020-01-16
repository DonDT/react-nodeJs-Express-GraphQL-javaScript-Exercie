import React, { useState } from "react";
import Filter from "./components/filter";
import FormField from "./components/formField";
import Persons from "./components/persons";

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

  const personsToShow = showAll
    ? persons
    : persons.filter(person =>
        person.name.toLowerCase().includes(searchName.toLowerCase())
      );

  const handleSearchTerm = event => {
    setSearchName(event.target.value);
    setShowAll(false);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter searchName={searchName} handleSearchTerm={handleSearchTerm} />

      <FormField
        handleSubmitForm={handleSubmitForm}
        newName={newName}
        handleSubmitNewName={handleSubmitNewName}
        newNumber={newNumber}
        handleSubmitNewNumber={handleSubmitNewNumber}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  );
};

export default App;
