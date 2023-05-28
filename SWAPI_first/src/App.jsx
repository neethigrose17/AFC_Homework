import './App.css';
// import Table from "./components/Table";
import axios from "axios";
import {useState, useEffect} from "react";


const endpoint = "https://swapi.dev/api/people";
const [tableInfo, setTableInfo] = useState("");

const handleSubmit = () => {
  axios
  .get(endpoint) // utilize endpoint
  .then(response => {
    console.log(response)
    // 2) get a response - if ok, parse data, else throw an error
    // 3) do something with the data
    setTableInfo(response.results);
  })
  .catch(err => {
    // 4) error handling
    console.log("axios error", err)
  })
}

const handleReset = () => {
  setTableInfo("");
}

let table = tableInfo.map((el, i) => {
  return (
    <table id="maintable">
            {/* dev tools told me I have to add these thead and tbody tags */}
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Hair Color</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{el.name}</td>
                    <td>{el.height}</td>
                    <td>{el.hair_color}</td>
                    <td>{el.gender}</td>
                </tr>
            </tbody>
        </table>
  )
})


const App = () => {
  return (
    <>
      <h1>Star Wars API</h1>
      <table>
        {table}
      </table>
      {/* <button type="submit" onClick={handleSubmit}>Click for info on Star Wars characters!</button>
      <button type="submit" onClick={handleReset}>Click to reset page</button> */}
    </>
  )
}

export default App;
