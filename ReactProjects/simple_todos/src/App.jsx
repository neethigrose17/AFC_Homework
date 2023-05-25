import {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
const endpoint = "https://accbucketlists.herokuapp.com/user/piyush/bucket";

// CRUD

// Update
// Delete

const App = () => {
  // set our states
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value)
    console.log(inputValue);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form has been submitted");
    let todoObj = {
      id: Date.now(),
      description: inputValue,
      isComplete: false
    }
    let items = [...todos, todoObj];
    setTodos(items)
    // reset input text box
    setInputValue("")
  }

  // Read
  useEffect(() => {
      // only want to run one time
    axios
    .get(endpoint)
    .then((response) => {
      // console.log(response);
      setTodos(response.data);
    })
    .catch(err => {
      console.log(`Issues reading data: ${err}`);
    })
  }, [])

  // Create

  let todosArray = todos.map((el, i) => {
    return <li key={el.id}>{el.description}</li>
  })

  return (
    <>
      <h1>I am the App page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          value={inputValue}
          placeholder="Enter new todo here..."
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {todosArray}
      </ul>
    </>
  )
}

export default App;