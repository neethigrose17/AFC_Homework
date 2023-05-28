import './App.css';
import Table from "./components/Table";
import axios from "axios";
const endpoint = "https://swapi.dev/api/people";


const App = () => {
  return (
    <>
      <h1>I am the App page</h1>
      <Table />
    </>
  )
}

export default App;
