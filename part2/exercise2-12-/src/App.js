import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsFound, setItemsFound] = useState([]);
  const [showCountryDetails, setShowCountryDetails] = useState(false);
  const [clickedItem, setClickedItem] = useState([]);

  const handleSearchTerm = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${searchTerm}`)
        .then(response => setItemsFound(response.data))
        .catch(error => {
          console.log("Data Not Found");
        });
    }
  });

  const specificCountry = () =>
    itemsFound.map(item => (
      <div key={item.name}>
        <div style={{ marginBottom: "15px" }}>{item.name}</div>

        <div>Capital {item.capital}</div>
        <div>Population {item.population}</div>

        <p>languages</p>
        <ul>
          {itemsFound[0].languages.map(item => (
            <li key={item.nativeName}>{item.name}</li>
          ))}
        </ul>
        <img src={item.flag} alt="country flag" width="150" height="150" />
      </div>
    ));

  const displayIndividualCountry = data => {
    setShowCountryDetails(true);
    setClickedItem(data);
    // setItemsFound([]);
  };

  const displayData = () =>
    itemsFound.length > 10
      ? "Too may matches, specify another filter"
      : itemsFound.length === 1
      ? specificCountry()
      : itemsFound.map(item => (
          <div key={item.name}>
            {item.name}{" "}
            <button onClick={() => displayIndividualCountry(item)}>show</button>
          </div>
        ));

  const displayCountriesNames = () =>
    itemsFound.length > 0 && searchTerm.trim().length === 0
      ? setItemsFound([])
      : displayData();

  return (
    <div>
      Find countries{" "}
      <input type="text" value={searchTerm} onChange={handleSearchTerm} />
      {!showCountryDetails && (
        <div style={{ marginTop: "20px" }}>{displayCountriesNames()}</div>
      )}
      {showCountryDetails && (
        <div>
          {searchTerm.trim().length > 0 ? (
            <div>
              <div style={{ marginBottom: "15px" }}>{clickedItem.name}</div>

              <div>Capital {clickedItem.capital}</div>
              <div>Population {clickedItem.population}</div>

              <p>languages</p>
              <ul>
                {itemsFound[0].languages.map(item => (
                  <li key={item.nativeName}>{item.name}</li>
                ))}
              </ul>
              <img
                src={clickedItem.flag}
                alt="country flag"
                width="150"
                height="150"
              />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default App;
