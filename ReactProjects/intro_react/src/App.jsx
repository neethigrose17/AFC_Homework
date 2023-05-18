import Feelings from "./components/Feelings";
import extensible from "./assets/IMG_7042.jpg";
import "./App.css";

const App = () => {
  const theStyles = {
    fontSize: "100px"
  }

  return (
  <div>
    <h1 style={theStyles}>I am the App Page</h1>
    <Feelings/>
    <img className="scary" src={extensible} alt="extensible" id="extensible"/>
  </div>
  );
};

export default App;