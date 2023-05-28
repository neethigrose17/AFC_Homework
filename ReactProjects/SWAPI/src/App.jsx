import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";
import Table from "./components/Table";

const endpoint = "https://swapi.dev/api/people";

const App = () => {
  let temp = 1;

  const [tableInfo, setTableInfo] = useState([]);
  const [content, setContent] = useState([]);

  const handleSubmit = () => {
    axios
    .get(endpoint)
    .then(response => {
      console.log(response.data.results);
      setTableInfo(response.data.results);
      setContent(<Table props={response.data.results} />)
    })
    .catch(err => {
      console.log("SWAPI error", err)
    })
  }

  const handleReset = () => {
    temp = 3;
  }
  return (
    <>
      <h1>Star Wars App page v.2</h1>
      <>
        {content}
      </>
      <button type="submit" onClick={handleSubmit}>Click for Star Wars character info</button>
      <button type="submit" onClick={handleReset}>Click to reset</button>
    </>
  )
}

export default App;
