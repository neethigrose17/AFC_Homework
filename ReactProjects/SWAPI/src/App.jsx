import './App.css'

let temp = 1;

const handleSubmit = () => {
  temp = 2;
}

const handleReset = () => {
  temp = 3;
}

const App = () => {
  return (
    <>
      <h1>Star Wars App page v.2</h1>
      <button type="submit" onClick={handleSubmit}>Click for Star Wars character info</button>
      <button type="submit" onClick={handleReset}>Click to reset</button>
    </>
  )
}

export default App;
