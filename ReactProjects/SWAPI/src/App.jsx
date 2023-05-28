import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";
import Table from "./components/Table";

const endpoint = "https://swapi.dev/api/people";

const App = () => {
  const [tableInfo, setTableInfo] = useState([]); // tableInfo starts empty
  // display variable allows me to toggle whether the table is visible
  const [display, setDisplay] = useState(false); // display starts false

  const handleSubmit = () => {
    axios
    .get(endpoint)
    .then(response => {
      setTableInfo(response.data.results); // this is an array, but is passed as an "object" so needs to be destructured in Table.jsx
      setDisplay(true); // set display variable to true
    })
    .catch(err => {
      console.log("SWAPI error", err)
    })
  }

  const handleReset = () => {
    setDisplay(false); // set display table to false
  }

  return (
    <>
      <h1>Star Wars Characters</h1>
      {/* ternary operator to determine whether to display table, and if displayed, send tableInfo as props */}
      {display ? <Table info={tableInfo} /> : <></>}
      <button type="submit" onClick={handleSubmit}>Click for Star Wars character info</button>
      <button type="submit" onClick={handleReset}>Click to reset</button>
    </>
  )
}

export default App;
