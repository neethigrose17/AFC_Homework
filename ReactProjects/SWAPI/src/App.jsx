import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";
import Table from "./components/Table";

const endpoint = "https://swapi.dev/api/people";

const App = () => {
  const [tableInfo, setTableInfo] = useState([]);
  const [display, setDisplay] = useState(false);

  const handleSubmit = () => {
    axios
    .get(endpoint)
    .then(response => {
      console.log(response.data.results);
      setTableInfo(response.data.results);
      setDisplay(true);
    })
    .catch(err => {
      console.log("SWAPI error", err)
    })
  }

  const handleReset = () => {
    setDisplay(false);
  }

  return (
    <>
      <h1>Star Wars App page v.2</h1>
      {display ? <Table info={tableInfo} /> : <></>}
      <button type="submit" onClick={handleSubmit}>Click for Star Wars character info</button>
      <button type="submit" onClick={handleReset}>Click to reset</button>
    </>
  )
}

export default App;
