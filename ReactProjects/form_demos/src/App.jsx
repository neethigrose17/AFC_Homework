import { useState } from "react";

const App = () => {
  let initialData = {
    fname: "",
    lname: "",
    age: 0
  }
  const [data, setData] = useState(initialData);

  const handleChange = (event) => {
    console.log(`${event.target.name}: ${event.target.value}`)
    setData({...data, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data)
  }

  return (
    <>
      <h1>Form Demos</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fuzzy">First Name</label>
        <input minLength="2" maxLength="5" id="fuzzy" type="text" name="fname" value={data.fname} onChange={handleChange} required/>
        <label htmlFor="wuzzy">Last Name</label>
        <input id="wuzzy" type="text" name="lname" value={data.lname} onChange={handleChange} required/>
        <label htmlFor="age">Age</label>
        <input min="1" max="99" id="age" type="number" name="age" value={data.age} onChange={handleChange} required/>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App;