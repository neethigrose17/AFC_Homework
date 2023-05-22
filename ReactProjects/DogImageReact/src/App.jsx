import {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";

const endpoint = "https://dog.ceo/api/breeds/image/random";

const App = () => {
  let startingImage = "https://images.dog.ceo/breeds/dingo/n02115641_7109.jpg";
  const [image, setImage] = useState(startingImage);

  const handleClick = () => {
    axios
      .get(endpoint) // 1) utilize endpoint
      .then(response => {
        // 2) get a response - if ok, parse data, else throw an error
        // 3) do something with the data
        setImage(response.data.message);
      })
      .catch(err => {
            // 4) error handling
        console.log("Dog Image error", err)
      })
  }

  useEffect(() => {
    
  }, [image])

  return (
    <>
      <h1>Dog Image API</h1>
      <div id="dog_image-container">
        <img src={image} alt="dog"/>
      </div>
      <button type="submit" onClick={handleClick}>Click for random dog</button>
    </>
  )
}

export default App;