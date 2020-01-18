import React, { useState, useEffect } from "react";
import Filter from "./components/filter";
import FormField from "./components/formField";
import Persons from "./components/persons";
import Methods from "./services/persons";
import Notification from "./components/notification";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [searchName, setSearchName] = useState("");
  const [notification, setNotification] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => setPersons(response.data));
  });

  const handleSubmitForm = event => {
    event.preventDefault();

    //setPersons(persons.concat({ name: newName, number: newNumber }));

    const newPerson = {
      name: newName,
      number: newNumber
    };

    const person = persons.find(item => item.name === newName);
    const arrayWithoutPerson = persons.filter(n => n.name !== newName);
    const changeOrAddPerson = { ...person, number: newNumber };
    const newId = persons.find(
      individual => individual.name === changeOrAddPerson.name
    );

    if (person) {
      if (
        window.confirm(
          `${newName} is already in the phone book, replace the old number with the new one?`
        )
      ) {
        axios
          .put(`http://localhost:3001/persons/${newId.id}`, changeOrAddPerson)
          .then(response => {
            setPersons(arrayWithoutPerson.concat(response.data));
            setNewName("");
            setNewNumber("");
          })
          .catch(error => {
            setNotification(
              `Information of ${changeOrAddPerson.name} has already been removed from server`
            );
            setNewName("");
            setNewNumber("");
            setTimeout(() => {
              setNotification(null);
            }, 3000);
          });
        setNotification(`${changeOrAddPerson.name} number has been changed`);
        setTimeout(() => {
          setNotification(null);
        }, 3000);
      }
    } else {
      Methods.postNew(newPerson)
        .then(response => {
          setPersons(
            persons.concat({
              name: response.data.name,
              number: response.data.number
            })
          );
          setNewName("");
          setNewNumber("");
          setNotification(`${response.data.name} number has been added`);
          setTimeout(() => {
            setNotification(null);
          }, 3000);
        })
        .catch(error => {
          console.log(error);
        });
    }
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
    const itemToDelete = persons.find(person => person.id === id);

    if (window.confirm("Delete this person ?")) {
      Methods.deleteItem(id)
        .then(response => {
          setPersons(persons.filter(n => n.id !== id));
          setNotification(`${itemToDelete.name} was deleted`);
          setTimeout(() => {
            setNotification(null);
          }, 3000);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      {notification && <Notification message={notification} />}
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
