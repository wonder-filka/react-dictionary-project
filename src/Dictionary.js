import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [serchValue, setSerchValue] = useState("");

  function getApiData(response) {
    alert(`${response.data[0].meanings[0].definitions[0].definition}`);
    return console.log(response.data);
  }

  function serchEnter(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${serchValue}`;
    axios.get(apiUrl).then(getApiData);
  }

  function handleChangeSearch(event) {
    setSerchValue(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>What word do you want to look up?</h1>
      <form onSubmit={serchEnter}>
        <input type="search" autoFocus="true" onChange={handleChangeSearch} />
      </form>
    </div>
  );
}