import React, { useState, useEffect } from "react";
import Filter from "./components/filter";
import FormField from "./components/formField";
import Persons from "./components/persons";
import Methods from "./services/persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => setPersons(response.data));
  }, []);

  const handleSubmitForm = event => {
    event.preventDefault();

    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        alert(`${newName} is already added to phonebook`);
      }
    }

    const newPerson = {
      name: newName,
      number: newNumber
    };

    Methods.postNew(newPerson).then(response => {
      setPersons(
        persons.concat({
          name: response.data.name,
          number: response.data.number
        })
      );
      setNewName("");
      setNewNumber("");
    });
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

  const handleDeleteItem = id => {
    if (window.confirm("Delete this person ?")) {
      Methods.deleteItem(id).then(response => {
        setPersons(persons.filter(n => n.id !== id));
      });
    }
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
      <Persons
        personsToShow={personsToShow}
        handleDeleteItem={handleDeleteItem}
      />
    </div>
  );
};

export default App;
