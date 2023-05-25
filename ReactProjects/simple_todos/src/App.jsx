import {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
const endpoint = "https://accbucketlists.herokuapp.com/user/piyush/bucket";

// CRUD

// Update

const App = () => {
  // set our states
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value)
    console.log(inputValue);
  }

  const handleKeyDown = (event) => {
    // user cannot submit using enter key
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }

  // Delete
  const handleDelete = (event) => {
    event.stopPropagation(); // prevents bubbling so that when you delete it doesn't try to update
    // data attributes
    // we need id from selected todo
    // compare current todos with selected id
    // remove todo with selected id
    let requestedID = event.target.parentElement.dataset.id
    console.log(requestedID)
    console.log(event.target.parentElement.dataset.id)
    // todos.find(el => {
    //   return requestedID === el.id
    // })
    let newTodos = todos.filter(el => {
      console.log(typeof requestedID);
      return el.id + "" !== requestedID
    })
    setTodos(newTodos)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form has been submitted");
    if (inputValue.trim()) {
      let todoObj = {
        id: Date.now(),
        description: inputValue,
        isComplete: false
      }
      let items = [...todos, todoObj];
      setTodos(items);
    }
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

    // Update
    const handleUpdate = () => {
      let copyOfTodos = [...todos]
      // get id from selected todo
      let requestedID = event.target.dataset.id
      let newTodo = todos.find(el => {
        console.log(typeof requestedID);
        return requestedID === el.id + ""
      })
      newTodo.isComplete = !newTodo.isComplete
      setTodos(copyOfTodos) // why does this work?
    }

  // Create

  let todosArray = todos.map((el, i) => {
    return (
        <li
          onClick={handleUpdate}
          key={el.id}
          data-id={el.id}
          className={el.isComplete ? "completed" : ""}
        >
          <button onClick={handleDelete}>X</button>
          {el.description}
        </li>
    )
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
          onKeyDown={handleKeyDown}
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