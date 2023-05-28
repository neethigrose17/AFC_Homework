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
    setDisplay(true); // set display variable to true
  }

  const handleReset = () => {
    setDisplay(false); // set display table to false
  }

  // I am fetching API info in the useEffect here, but I could also do it in handleSubmit and then again I am not sure the purpose of the useEffect (it works without it)

  useEffect(() => {
    axios
    .get(endpoint)
    .then(response => {
      setTableInfo(response.data.results); // this is an array, but is passed as an "object" so needs to be destructured in Table.jsx
    })
    .catch(err => {
      console.log("SWAPI error", err)
    })
  }, [])

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
