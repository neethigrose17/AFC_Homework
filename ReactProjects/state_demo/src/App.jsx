import {useState, useEffect} from "react"

const App = () => {
  const [doggy, setDoggy] = useState("woof")
  const [cat, setCat] = useState(23)

  const handleClick = () => {
    setDoggy("chirp");
    setCat(42);
  }

  // useEffect( () => {
  //   setDoggy("chirp");
  // }, [doggy])

  useEffect( () => {
    // setCat("bark")
  }, [doggy, cat]);

  return (
    <>
      <h1>I am the {doggy} component</h1>
      <h2>I am the {cat} stuff</h2>
      <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default App;